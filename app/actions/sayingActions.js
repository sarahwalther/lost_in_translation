let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');
let authUtils = require('../utils/authUtils');

let storage = firebaseUtils.homeInstance().child('public').child('sayings');
let userStorage = firebaseUtils.homeInstance().child("user");

let sayingActions = {
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

    addLike(index, key, uid) {
        var updatedLikes;
        let currentSaying = storage.child(key);
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_LIKE,
            index
        });
        storage.child(key).once('value', (snapshot) => {
            updatedLikes = snapshot.val().title.likes+1;
        });
        storage.child(key).child('title').update({likes: updatedLikes});

        AppDispatcher.handleAction({
            actionType: appConstants.ADD_FAVORITE,
            data: currentSaying
        });
        storage.child(key).once('value', (snapshot) => {
            userStorage.child(uid).child("likes").push(snapshot.val());
        });

    },

    removeSaying(index, key) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        });
        storage.child(key).remove();

    }

};

module.exports = sayingActions;
