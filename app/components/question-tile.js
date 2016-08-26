import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

formattedDate: Ember.computed('question.timestamp', function(){
  var date = this.get('question.timestamp');
  var formattedDate = moment(date).fromNow();
  return formattedDate;
}),

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
