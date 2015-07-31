let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');
let authUtils = require('../utils/authUtils');

let loggedIn = authUtils.isLoggedIn();
let uid = (loggedIn && loggedIn.uid) || "demo";

let storage = firebaseUtils.homeInstance().child('user').child(uid).child('sayings');

let favoriteSayingsActions = {
    getSayings(sayings) {
        storage.on('value', (snapshot) => {
            AppDispatcher.handleAction({
                actionType: appConstants.GET_DATA,
                data: {
                    sayings: firebaseUtils.toArray(snapshot.val())
                }
            });
        });
    },

    addSaying(saying) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: saying
        });
        storage.push(saying);
    },

    removeSaying(index, key) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        });
        storage.child(key).remove();
    }

};

module.exports = favoriteSayingsActions;
