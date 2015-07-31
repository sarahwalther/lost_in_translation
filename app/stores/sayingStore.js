let AppDispatcher = require('../dispatcher/AppDispatcher');
let appConstants = require('../constants/appConstants');
const objectAssign = require('react/lib/Object.assign');
const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

let _store = {
    sayings: [],
    favoriteSayings: []
};

let setSaying = (data) => _store.sayings = data;

let setFavoriteSayings = (data) => _store.favoriteSayings = data;

let addSaying = (item) => _store.sayings.push(item);

let addLike = (index) => _store.sayings[index].saying.likes++ ;

let removeSaying = (index) => _store.sayings.splice(index, 1);

let deleteFavorite = (index) => _store.favoriteSayings.splice(index, 1);

let sayingStore = objectAssign({}, EventEmitter.prototype, {

    getSayings() { return _store.sayings; },

    getSayingsCount() { return _store.saying.length },

    getFavoriteSayings() { return _store.favoriteSayings; },

    addChangeListener(cb) { this.on(CHANGE_EVENT, cb); },

    removeChangeListener(cb) { this.removeListener(CHANGE_EVENT, cb); }

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.GET_DATA:
            setSaying(action.data.sayings);
            sayingStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ADD_ITEM:
            addSaying(action.data);
            sayingStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_ITEM:
            removeSaying(action.data.index);
            sayingStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ADD_LIKE:
            addLike(action.index);
            sayingStore.emit(CHANGE_EVENT);
            break;
        case appConstants.GET_FAVORITES:
            setFavoriteSayings(action.data.sayings);
            sayingStore.emit(CHANGE_EVENT);
            break;
        case appConstants.DELETE_FAVORITE:
            deleteFavorite(action.data.index);
            sayingStore.emit(CHANGE_EVENT);
        default:
            return true;
    }
});

module.exports = sayingStore;
