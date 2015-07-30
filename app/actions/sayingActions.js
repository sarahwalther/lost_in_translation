let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');

let storage = firebaseUtils.homeInstance().child('public').child('sayings');

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

    removeSaying(index, key) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        });
        storage.child(key).remove();

    }

};

module.exports = sayingActions;
