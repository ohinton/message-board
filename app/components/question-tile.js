import Ember from 'ember';

export default Ember.Component.extend({

  answerTotal: Ember.computed('question.answers.[]', function(){
    var total = 0;
    this.get('question.answers').forEach(function(answer){
      total += 1;
    });
    return total;
  })

});
