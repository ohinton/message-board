import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    addToFaves(favorite) {
      this.get('favoriteList').add(favorite);
    }
  }
});
