let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
let firebaseUtils = require('../utils/firebaseUtils');
let authUtils = require('../utils/authUtils');

let storage = firebaseUtils.homeInstance().child('public').child('sayings');

let popularSayingActions = {
    getSayings() {
        storage.orderByChild("likes").limit(6).on('value', (snapshot) => {
            AppDispatcher.handleAction({
                actionType: appConstants.GET_POPULAR,
                data: {
                    sayings: firebaseUtils.toArray(snapshot.val()).sort(function(a,b){
                        var x = a.likes > b.likes? -1:1;
                        return x;
                    })
                }
            });
        });
    },

};

module.exports = popularSayingActions;
