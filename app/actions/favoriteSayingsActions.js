let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');
let authUtils = require('../utils/authUtils');

let loggedIn = authUtils.isLoggedIn();
let uid = (loggedIn && loggedIn.uid) || 'demo';

let storage = firebaseUtils.homeInstance().child('user').child(uid).child('likes');

let favoriteSayingsActions = {
    getSayings() {
        storage.on('value', (snapshot) => {
            AppDispatcher.handleAction({
                actionType: appConstants.GET_FAVORITES,
                data: {
                    sayings: firebaseUtils.toArray(snapshot.val())
                }
            });
        });
    },

    removeSaying(index, key) {
        AppDispatcher.handleAction({
            actionType: appConstants.DELETE_FAVORITE,
            data: index
        });
        storage.child(key).remove();
    }

};

module.exports = favoriteSayingsActions;
