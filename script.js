//global
var currentGameMode = "waiting for user name";
var userName = "";
var winCounter = 0;
var loseCounter = 0;
var gameCounter = 0;
var drawCounter = 0;

//helper functions
var getWinPercentage = function () {
  var winPercentage = (winCounter / gameCounter) * 100;
  return Number(winPercentage.toFixed(0));
};

var getRandomNumber = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  return randomInteger;
};

var getRandomNumberForFrench = function () {
  var randomInteger = Math.floor(Math.random() * 4);
  return randomInteger;
};

var getRandomComputerChoice = function () {
  var randomComputerChoice = getRandomNumber();
  if (randomComputerChoice == 0) {
    return "scissors";
  }
  if (randomComputerChoice == 1) {
    return "paper";
  }
  if (randomComputerChoice == 2) {
    return "stone";
  }
};

var getFrenchComputerChoice = function () {
  var randomFrenchChoice = getRandomNumberForFrench();
  console.log("french computer choice", randomFrenchChoice);
  if (randomFrenchChoice == 0) {
    return "scissors";
  }
  if (randomFrenchChoice == 1) {
    return "paper";
  }
  if (randomFrenchChoice == 2) {
    return "stone";
  }
  if (randomFrenchChoice == 3) {
    return "well";
  }
};

//normal sps game logic
var playNormalSPS = function (userName, userGuess) {
  if (Number.isNaN(Number(userGuess)) == false) {
    message = "Sorry! Please enter 'scissors', 'paper', or 'stone'.";
  } else {
    var winPercent = getWinPercentage();
    if (Number.isNaN(Number(winPercent)) == true) {
      winPercent = 0;
      console.log("NAN removal");
    }
    var message = "";
    var computerChoice = getRandomComputerChoice();
    console.log("comp choice", computerChoice);
    if (userGuess == computerChoice) {
      gameCounter += 1;
      drawCounter += 1;
      console.log("draw");
      message =
        "It's a tie. <br><br>In this game of scissors, paper, stone, you both chose " +
        computerChoice +
        ".<br> </br> Did you know? Scissors, paper, stone is the oldest hand game in the world! <br><br>Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    }
    if (
      (userGuess == "scissors" && computerChoice == "paper") ||
      (userGuess == "paper" && computerChoice == "stone") ||
      (userGuess == "stone" && computerChoice == "scissors")
    ) {
      gameCounter += 1;
      winCounter += 1;
      winPercent = getWinPercentage();
      console.log("win");
      message =
        userName +
        ", you win! <br><br>In this game of scissors, paper, stone, you chose " +
        userGuess +
        " and computer chose " +
        computerChoice +
        ". <br> <br>Yay! Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    } else if (
      (userGuess == "scissors" && computerChoice == "stone") ||
      (userGuess == "paper" && computerChoice == "scissors") ||
      (userGuess == "stone" && computerChoice == "paper")
    ) {
      gameCounter += 1;
      loseCounter += 1;
      console.log("lose");
      message =
        "Awww " +
        userName +
        ", you lost. <br><br>In this game of scissors, paper, stone, you chose " +
        userGuess +
        " and computer chose " +
        computerChoice +
        ". <br> <br>Bummer! Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    }
  }
  return message;
};

//reverse sps game logic
var playReverseSPS = function (userName, userGuess) {
  if (Number.isNaN(Number(userGuess)) == false) {
    message = "Sorry! Please enter 'scissors', 'paper', or 'stone'.";
  } else {
    var winPercent = getWinPercentage();
    if (Number.isNaN(Number(winPercent)) == true) {
      winPercent = 0;
      console.log("NAN removal");
    }
    var message = "";
    var computerChoice = getRandomComputerChoice();
    console.log("reverse comp choice", computerChoice);
    if (userGuess == computerChoice) {
      drawCounter += 1;
      gameCounter += 1;
      console.log("reverse draw");
      message =
        "It's a tie. <br><br>In this game of reversed scissors, paper, stone, you both chose " +
        computerChoice +
        ". <br> <br>Did you know? Women are most likely to throw scissors and men throw rocks more often. <br><br>Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    }
    if (
      (userGuess == "scissors" && computerChoice == "paper") ||
      (userGuess == "paper" && computerChoice == "stone") ||
      (userGuess == "stone" && computerChoice == "scissors")
    ) {
      gameCounter += 1;
      loseCounter += 1;
      console.log("reverse lose");
      message =
        "Awww " +
        userName +
        ", you lost.<br><br>In this game of reversed scissors, paper, stone, you chose " +
        userGuess +
        " and computer chose " +
        computerChoice +
        ". <br> <br>You shouldn't have chosen the reverse mode! <br><br>Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    } else if (
      (userGuess == "scissors" && computerChoice == "stone") ||
      (userGuess == "paper" && computerChoice == "scissors") ||
      (userGuess == "stone" && computerChoice == "paper")
    ) {
      gameCounter += 1;
      winCounter += 1;
      winPercent = getWinPercentage();
      console.log("reverse win");
      message =
        userName +
        ", you win! <br><br>In this game of reversed scissors, paper, stone, you chose " +
        userGuess +
        " and computer chose " +
        computerChoice +
        ". <br> <br>Woohoo! Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    }
  }
  return message;
};

// french sps game logic
var playFrenchSPS = function (userName, userGuess) {
  if (Number.isNaN(Number(userGuess)) == false) {
    message = "Sorry! Please enter 'scissors', 'paper', 'stone', or 'well'.";
  } else {
    var winPercent = getWinPercentage();
    if (Number.isNaN(Number(winPercent)) == true) {
      winPercent = 0;
      console.log("NAN removal");
    }
    var message = "";
    var computerChoice = getFrenchComputerChoice();
    console.log("french comp choice", computerChoice);
    if (userGuess == computerChoice) {
      gameCounter += 1;
      drawCounter += 1;
      console.log("french draw");
      message =
        "It's a tie, " +
        userName +
        ".<br><br>In this game of french scissors, paper, stone, you both chose " +
        computerChoice +
        ". <br> <br>Did you know? The 'well' is made by forming a circle with the thumb and index finger to show the opening of a stone well. <br><br>Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    }
    if (
      (userGuess == "scissors" && computerChoice == "stone") ||
      (userGuess == "paper" && computerChoice == "scissors") ||
      (userGuess == "stone" && computerChoice == "paper") ||
      (userGuess == "scissors" && computerChoice == "well") ||
      (userGuess == "stone" && computerChoice == "well") ||
      (userGuess == "well" && computerChoice == "paper")
    ) {
      gameCounter += 1;
      loseCounter += 1;
      console.log("french lose");
      message =
        "Des clous! (Oh no!) " +
        userName +
        ", you lost.<br><br>In this game of french scissors, paper, stone, you chose " +
        userGuess +
        " and computer chose " +
        computerChoice +
        ". <br> <br>Pas de souci! (Don't worry!) Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    } else if (
      (userGuess == "scissors" && computerChoice == "paper") ||
      (userGuess == "paper" && computerChoice == "stone") ||
      (userGuess == "stone" && computerChoice == "scissors") ||
      (userGuess == "well" && computerChoice == "stone") ||
      (userGuess == "well" && computerChoice == "scissors") ||
      (userGuess == "paper" && computerChoice == "well")
    ) {
      gameCounter += 1;
      winCounter += 1;
      winPercent = getWinPercentage();
      console.log("french win");
      message =
        "Oh Mon Dieu (OMG) " +
        userName +
        ", you win! <br><br>In this game of french scissors, paper, stone, you chose " +
        userGuess +
        " and computer chose " +
        computerChoice +
        ". <br> <br>Ooooo là là! Here are your current stats. <br>Total games: " +
        gameCounter +
        "<br>Win: " +
        winCounter +
        "<br>Lose: " +
        loseCounter +
        "<br>Draw: " +
        drawCounter +
        "<br>All in all, you won " +
        winPercent +
        "% of the time.";
    }
  }
  return message;
};

//computer vs computer game logic
var playComputerSPS = function () {
  var winPercent = getWinPercentage();
  if (Number.isNaN(Number(winPercent)) == true) {
    winPercent = 0;
    console.log("NAN removal");
  }
  var message = "";
  var computerChoice1 = getRandomComputerChoice();
  var computerChoice2 = getRandomComputerChoice();
  console.log("comp vs comp choice", computerChoice1, computerChoice2);
  if (computerChoice1 == computerChoice2) {
    gameCounter += 1;
    drawCounter += 1;
    console.log("computer draw");
    message =
      "Tie. <br><br>" +
      userName +
      ", you are playing the computer mode now. You both chose " +
      computerChoice1 +
      ". <br> </br>Did you know? Laziness is one of the 7 deadly sins. Why don't you try another mode the next round? <br><br>Here are your current stats. <br>Total games: " +
      gameCounter +
      "<br>Win: " +
      winCounter +
      "<br>Lose: " +
      loseCounter +
      "<br>Draw: " +
      drawCounter +
      "<br>All in all, you won " +
      winPercent +
      "% of the time.";
  }
  if (
    (computerChoice1 == "scissors" && computerChoice2 == "stone") ||
    (computerChoice1 == "paper" && computerChoice2 == "scissors") ||
    (computerChoice1 == "stone" && computerChoice2 == "paper")
  ) {
    gameCounter += 1;
    loseCounter += 1;
    console.log("computerlose");
    message =
      userName +
      ", you lost. <br><br>You are playing the computer mode now. You let the computer chose " +
      computerChoice1 +
      " and computer chose " +
      computerChoice2 +
      " for itself. <br> <br>Maybe you should have played it yourself. Here are your current stats. <br>Total games: " +
      gameCounter +
      "<br>Win: " +
      winCounter +
      "<br>Lose: " +
      loseCounter +
      "<br>Draw: " +
      drawCounter +
      "<br>All in all, you won " +
      winPercent +
      "% of the time.";
  } else if (
    (computerChoice1 == "scissors" && computerChoice2 == "paper") ||
    (computerChoice1 == "paper" && computerChoice2 == "stone") ||
    (computerChoice1 == "stone" && computerChoice2 == "scissors")
  ) {
    gameCounter += 1;
    winCounter += 1;
    winPercent = getWinPercentage();
    console.log("computer win");
    message =
      "Wow sloth, you won! <br><br>You are playing the computer mode now. The computer chose " +
      computerChoice1 +
      " for you and " +
      computerChoice2 +
      " for itself. <br><br>Here are your current stats. <br>Total games: " +
      gameCounter +
      "<br>Win: " +
      winCounter +
      "<br>Lose: " +
      loseCounter +
      "<br>Draw: " +
      drawCounter +
      "<br>All in all, you won " +
      winPercent +
      "% of the time.";
  }
  return message;
};

//main function
var main = function (input) {
  var myOutputValue = "";
  var input = input.toLowerCase();
  // get username
  if (currentGameMode == "waiting for user name") {
    userName = input;
    //with the username, change mode to play sps
    currentGameMode = "normal SPS";
    //welcome msg + instructions
    myOutputValue =
      "Hello " +
      userName +
      "! <br> Enter scissors, paper, or stone to start. Alternatively, change the mode.";
  } else if (currentGameMode == "normal SPS") {
    myOutputValue = playNormalSPS(userName, input);
  }
  // option to go back and play normal mode
  if (input == "normal") {
    currentGameMode = "normal";
    myOutputValue = "You are playing the normal mode.";
  } else if (currentGameMode == "normal") {
    myOutputValue = playNormalSPS(userName, input);
  }
  // other options
  if (input == "reverse") {
    currentGameMode = "reverse";
    myOutputValue =
      "You are playing the reverse mode. Enter scissors, paper, or stone to start.";
  } else if (currentGameMode == "reverse") {
    myOutputValue = playReverseSPS(userName, input);
  }
  if (input == "french") {
    currentGameMode = "french";
    myOutputValue =
      "Bonjour " +
      userName +
      "! You are playing the french mode. <br><br><br> The French version, pierre, papier, ciseaux, puits (stone, paper, scissors, well) is unbalanced. <br><br> Both stone and scissors fall in the well and lose to it, while paper covers both stone and well. <br><br>This means 2 'weapons', well and paper, can defeat 2 moves, while the other 2 weapons, scissors and stone each defeat only 1 of the other 3 choices.<br><br> The stone has no advantage to well, so optimal strategy is to play each of the other objects (paper, scissors and well) 1/3 of the time. <br><br>Enter scissors, paper, stone, or well to start. Je vous! (Good luck!)";
  } else if (currentGameMode == "french") {
    myOutputValue = playFrenchSPS(userName, input);
  }
  if (input == "computer") {
    currentGameMode = "computer";
    myOutputValue =
      "You are playing the computer mode. <br><br> Computer will pick for you. Just click 'Lets go!";
  } else if (currentGameMode == "computer") {
    myOutputValue = playComputerSPS();
  }

  return myOutputValue;
};
