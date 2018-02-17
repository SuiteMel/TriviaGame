window.onload = function () {
  $("#start").on("click", createQ);
}

var questions = [
  {
    question: "What do you need to mine gold ore?",
    answer: "Iron Pickaxe",
    options: ["Diamond Axe", "Iron Pickaxe", "Stone Shovel", "Gold Pickaxe"]
  },
  {
    question: "Which of these is not a villager profession?",
    answer: "Lumberjack",
    options: ["Farmer", "Blacksmith", "Lumberjack", "Nitwit"]
  },
  {
    question: "Which of these dye colors is not in Minecraft?",
    answer: "Indigo",
    options: ["Indigo", "Lime Green", "Magenta", "Cyan"]
  },
  {
    question: "How many bosses are in Minecraft?",
    answer: "2",
    options: ["There are no bosses in Minecraft", "1", "2", "3"]
  },
  {
    question: "Which crop can't be bonemealed?",
    answer: "Sugar Cane",
    options: ["Melons", "Netherwart", "Cocoa Beans", "Sugar Cane"]
  },
  {
    question: "How many bites can you take out of cake?",
    answer: "7",
    options: ["4", "1", "8", "7"]
  },
  {
    question: "Which is these is not a potion modifier?",
    answer: "String",
    options: ["String", "Gunpowder", "Fermented Spider Eye", "Redstone"]
  },
  {
    question: "Which piece of armor can you put the Aqua Affinity enchantment on?",
    answer: "Helmet",
    options: ["Chestplate", "Boots", "Helmet", "Leggings"]
  }
];

var number = 120;
var intervalId;

function runTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  var converted = timeConverter(number);
  $("#timer").text(converted);

  if (number === 0) {
    submitQ();
  }
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

function createQ() {
  var timer = $("<div>");
  timer.attr("id", "timer");
  $("#content").html(timer);
  runTimer();

  var questionsDiv = $("<div>");
  questionsDiv.attr("id", "questions");

  $.each(questions, function (x, y) {
    var questionDiv = $("<div>");
    questionDiv.attr("id", "question" + x);

    var questionP = $("<p>");
    questionP.attr("class", "question");
    questionDiv.append(questionP);

    questionP.append(questions[x].question);

    var optionsUl = $("<ul>");
    optionsUl.attr("class", "options");

    $.each(questions[x].options, function (i, j) {
      var li = $("<li>");
      optionsUl.append(li);
      questionDiv.append(optionsUl);

      var optionsInput = $("<input>");
      optionsInput.attr({ type: "radio", name: "quest" + x, value: j });
      li.append(optionsInput);
      li.append(j);
    })


    questionsDiv.append(questionDiv);

    $("#content").append(questionsDiv);
  });

  var submit = $("<button>");
  submit.attr("id", "submit");
  submit.append("Submit");
  $("#content").append(submit);

  $("#submit").on("click", submitQ);
}

function submitQ() {
  var answers = [];
  $.each(questions, function (x, y) {
    var radioButton = $('input[type="radio"][name="quest' + x + '"]:checked');
    var radioCheck = radioButton.length > 0;
      if (radioCheck === true) {
        radioButton.each(function () {
          answers.push($(this).val());
        });
      } else {
        answers.push(null);
      }
  });

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

  $.each(answers, function(key, value) {
    if (value === questions[key].answer) {
      correct++;
    } else if (value === null) {
      unanswered++;
    } else {
      wrong++;
    }
  });

  var message = $("<h3>All Done!</h3>");
  var correctAns = $("<p>");
  var wrongAns = $("<p>");
  var unAns = $("<p>");

  correctAns.append("Correct Answers: " + correct);
  wrongAns.append("Wrong Answers: " + wrong);
  unAns.append("Unanswered: " + unanswered);

  var resultsDiv = $("<div>");
  resultsDiv.attr("id", "results");

  resultsDiv.append(message, correctAns, wrongAns, unAns);

  $("#content").html(resultsDiv);
  
  //Ask about .map vs .each
  // $.each(questions, function(x, y) {
  //   var ans = radioButton.map(function(){
  //     return $(this).val();
  //   }).get();
  //   console.log("Ans: " + ans);
  // });
}




