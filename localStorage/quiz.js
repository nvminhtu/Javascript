
  var $win,
      quiz = $('.quiz'),
      lengthQuiz =quiz.length;    

  init();

  function init() {
    checkItem();
    initLocalStorage();
    showResult();  
  }

  /**
  *** func: checkbox selected
  **/
  function checkItem() {
    
    $.each(quiz,function(index,item){
      var thisQuiz = $(this).attr('id'),
          thisChecks = "#"+ thisQuiz + " input[name='favorite']";
  
      if($(this).hasClass('active')){
        $(thisChecks).change(function () {
            var 
              answers = {},
              items =  $(thisChecks);
            //get value of checked item    
            $.each(items,function(index,item){
              if($(item).prop('checked')) {
                var $keyItem = $(item).val();
                answers[$keyItem] = $(item).next().text();
              }
            });
            //store value
            var thisChecked = thisQuiz+'-data',
                thisAnswer = {question: thisQuiz, answer: answers };
            localStorage.setItem(thisChecked,JSON.stringify(thisAnswer));
            console.log(localStorage.getItem(thisChecked));   
        });
          
      }
    });
  }
  
  /**
  *** func: get/keep current step if click next or refresh page
  **/
  function saveStorage(nextID) {
    //get current id of question
    var currentItem = localStorage.getItem('step'),
        currentEQ = checkCurrent();
    
    checkItem();
    if(quiz.eq(currentEQ).hasClass('active')){
      var quizID = quiz.eq(nextID).attr('id');
      localStorage.setItem('step', quizID);
    }

    if(currentItem==null) {
      localStorage.setItem('step','start');
    }
  }

  /**
  *** func: click to Next
  **/
  function clickNext() {
    var currentEQ = checkCurrent();
    // go to next quiz
    if(currentEQ !== quiz.length - 1) {
      quiz.eq(currentEQ).removeClass('active');
      quiz.eq(currentEQ+1).addClass('active');
      saveStorage(currentEQ+1);
    }
    // check if end of quiz
    if(currentEQ == quiz.length - 1 ) {
      localStorage.setItem('step','end');
      quiz.eq(currentEQ).removeClass('active');
      $('#final').addClass('active');
    } 
  }
  
  /**
  *** func: click to Prev
  **/
  function clickPrev() {
    var currentEQ = checkCurrent();
    if(currentEQ !== 0) {
      quiz.eq(currentEQ).removeClass('active');
      quiz.eq(currentEQ-1).addClass('active');
      saveStorage(currentEQ-1);
    }
    // check if end of quiz then back to previous
    var currentItem = localStorage.getItem('step'),
        quizID = quiz.eq(quiz.length-1).attr('id');
    if (currentItem == 'end') {
      quiz.eq(quiz.length-1).addClass('active');
      $('#final').removeClass('active');
      localStorage.setItem('step',quizID);
    }
  }

  /**
  *** func: check Current
  **/
  function checkCurrent() {
    var currentEQ;
    quiz.each(function(index, el) {
      if(quiz.eq(index).hasClass('active')) {
        currentEQ = index;
      }
    });

    return currentEQ;
  }
  /**
  *** func: init LocalStorage
  **/
  function initLocalStorage() { 
   
    //step 1: load current step at the first
    var stepData = localStorage.getItem('step');
    if(stepData == null) {
      localStorage.setItem('step','start');
    } else if(stepData == 'end') {
      $('#final').addClass('active');
    } else { //in playing quiz
      var activeQuiz = $('#'+stepData);
      quiz.removeClass('active');
      activeQuiz.addClass('active');
    }

    //step 2: load answer data to all question
    for(var i = 1 ; i < lengthQuiz + 1; i++) {
      var getQues = 'ques0'+ i + '-data',
          quesData = JSON.parse(localStorage.getItem(getQues));
      
      var thisChecks = "#ques0"+ i + " input[name='favorite']",
          items =  $(thisChecks);

      if(quesData!==null) { //if localStorage has data
        var question = quesData.question,
            answers = quesData.answer;
          for(var key in answers){
            $.each(items,function(index,item){
              if($(item).val()==key){
                $(item).prop('checked', true);
              }
            });
            
          }
      } else { //if localStorage doesn't have data
        var answers = {};
        $.each(items,function(index,item){
          if($(item).is(':checked')) {
            var $keyItem = $(item).val();  
            answers[$keyItem] = $(item).next().text();
          }
        });
        var ques = 'ques0'+ i,
            null_data = {question: ques, answer: answers };

        localStorage.setItem(getQues,JSON.stringify(null_data));
      }
    }
  }

  /**
  *** func: show result - format HTML here
  **/
  function showResult() {
    var result = '',
        resultTG = $('#result');
    
    for(var i = 1 ; i < lengthQuiz + 1; i++) {
        var getQues = 'ques0'+ i + '-data';
        var quesData = JSON.parse(localStorage.getItem(getQues));
        if(quesData!==null) {
          var 
              question = quesData.question,
              answers = quesData.answer;
          
          result += 'Question ' + i + ': ' + question + " <br> ";
          result += 'Answer: ';
          result += '<ul>';
          for(var key in answers) {
            result += '<li>' + answers[key] + '</li>';
          }
          result += '</ul>';
        }
    }
    
    resultTG.html(result);             

  }

  // F5: load answer option checked to question