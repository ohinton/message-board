import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  answerTotal: Ember.computed('question.answers', function(){
    var total = 0;
    this.get('question.answers').forEach(function(){
      total += 1;
    });
    return total;
  }),

  actions: {
    addToFaves(favorite) {
      this.get('favoriteList').add(favorite);
    }
  }

});
