$(document).ready(function() {
  var answers = new Answers()

  $('#First_User_Ans').change(function(event) {
    event.preventDefault();
    var user_answer = $('#First_User_Ans').val();
    $('#First_Ans').text(answers.qOne(user_answer))
  })

  $('#Second_User_Ans').change(function(event) {
    event.preventDefault();
    var user_answer = $('#Second_User_Ans').val();
    $('#Second_Ans').text(answers.qTwo(user_answer)) 
  })

})
