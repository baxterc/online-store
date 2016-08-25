import Ember from 'ember';

export function productScore(params) {
  var reviews = params[0].get('feedbacks');
  var runningScore = 0;

  reviews.forEach(function(feedback) {
    runningScore += parseInt(feedback.get('score'));

  });
  var averageScore = runningScore / reviews.get('length');
  var toReturn = "";
  for (var i = 0; i < averageScore; i++) {
    toReturn += "asdf"
  };
  return Ember.String.htmlSafe(toReturn);
}

export default Ember.Helper.helper(productScore);
