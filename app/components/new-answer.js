import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showNewAnswerForm() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
