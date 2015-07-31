// let AppDispatcher = require('../dispatcher/AppDispatcher');
// let appConstants = require('../constants/appConstants');
// let firebaseUtils = require('../utils/firebaseUtils');
// let authUtils = require('../utils/authUtils');

// let loggedIn = authUtils.isLoggedIn();
// let uid = (loggedIn && loggedIn.uid) || "demo";

// let storage = firebaseUtils.homeInstance().child('user').child(uid).child('sayings');
// let userStorage = firebaseUtils.homeInstance().child('user');

// let likeActions = {
//     getSayingLikes(sayings) {
//         storage.on('value', function(snapshot){
//             AppDispatcher.handleAction({
//                 actionType: appConstants.GET_DATA,
//                 data: {
//                     list: firebaseUtils.toArray(snapshot.val())
//                 }
//             });
//         });
//     },

//     getUserLikes(user) {
//         storage.on('value', function(snapshot){
//             AppDispatcher.handleAction({
//                 actionType: appConstants.GET_DATA,
//                 data: {
//                     list: firebaseUtils.toArray(snapshot.val())
//                 }
//             });
//         });
//     },

//     addLike(saying) {

//         let oldSayings = getSayingLikes(saying);
//         AppDispatcher.handleAction({
//             actionType: appConstants.ADD_ITEM,
//             data: saying
//         });
//         storage.update(saying);
//     },

//     removeSaying(index, key) {
//         AppDispatcher.handleAction({
//             actionType: appConstants.REMOVE_ITEM,
//             data: index
//         });
//         storage.child(key).remove();
//     }

// };

// module.exports = likeActions;
