/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
      "Who did the Vols play as a season opener in their 1998 season?": [
        "Syracuse",
        "Houston",
        "Arkansas",
        "Florida"
      ]
    },
    {
      "Against the Gators, the game was tied at the end of regulation. What happened to the Gators 1st overtime field goal?": [
        "missed wide",
        "missed snap",
        "blocked",
        "short"
      ]
    },
    {
      "In a game vs. South Carolina, Tee Martin set the school, conference, and NCAA record for most consecutive completions. Peyton Manning had the previous school record with how many in a row?": [
        "12",
        "19",
        "10",
        "17"
      ]
    },
    {
      "What kind of injury took out running back Jamal Lewis?": [
        "Torn ACL",
        "Broken Leg",
        "High Ankle Sprain",
        "Hip Sprain"
      ]
    },
    {
      "In the low scoring game against Auburn, which player scooped up the fumble to run it the other way for 91 yards and a TD?": [
        "Shaun Ellis",
        "Al Wilson",
        "Deion Grant",
        "Will Overstreet"
      ]
    },
    {
      "At home against Alabama, Peerless Price ran a kickoff return for a TD. How many yards was it?": [
        "100",
        "90",
        "103",
        "98"
      ]
    },
    {
      "At the end of the season against Vanderbilt, what was the final score?": [
        "41-0",
        "39-6",
        "46-9",
        "36-9"
      ]
    },
    {
      "What number did Al Wilson wear?": [
        "27",
        "56",
        "23",
        "46"
      ]
    },
    {
      "In the national Championship game against Florida State, who returned an interception for a TD?": [
        "Dwayne Goodrich",
        "Dieon Grant",
        "Al Wilson",
        "Leonord Little"
      ]
    },
    {
      "After the championship game, which player was taunting the Seminoles with a tomahawk of his own?": [
        "Peerless Price",
        "Shaun Ellis",
        "Al Wilson",
        "Jeff Hall"   
      ]
    },
    {
      "In 2003, who was the starting QB?": [
        "James Banks",
        "Casey Clausen",
        "C.J. Leak",
        "Phil Fulmer"
      ]
    },
    {
      "Who was the head coach of the Vols in 2003?": [
        "Phil Fulmer",
        "Steve Spurrier",
        "Randy Sanders",
        "Bobby Bowden"
      ]
    },
    {
      "Which Bowl game did Tennessee play in during their 2003-04 season, and who did they play?": [
        "Peach Bowl, Clemson",
        "Peach Bowl, Maryland",
        "Citrus Bowl, Michigan",
        "Sugar Bowl, LSU"
      ]
    },
    {
      "In the 2003-04 season, the Vols beat Vanderbilt in the Senior`s final game at home. What was the final score of that game?": [
        "48-0",
        "21-0",
        "45-0",
        "42-7"
      ]
    },
    {
      "Which of these was not a Volunteer halfback in the 2003-04 season?": [
        "Jabari Davis",
        "Gerald Riggs",
        "Michael Munoz",
        "Cedric Houston"
      ]
    },
    {
      "What number did Dustin Colquitt wear in the 2003-04 season?": [
        "47",
        "12",
        "7",
        "25"
      ]
    },
    {
      "Which former Tennessee QB`s brother was part of a trade in the 2004 NFL Draft?": [
        "Peyton Manning",
        "Casey Clausen",
        "Jim Kelley",
        "Tee Martin"
      ]
    },
    {
      "Which former Tennessee player played for the Cincinnati Bengals?": [
        "Kelley Washington",
        "Carson Palmer",
        "Peyton Manning",
        "Jason Witten"
      ]
    },
    	{
      "Tennessee played Syracuse away for their first win of the season. The game was won in the final seconds with a field goal. Who was the kicker?": [
      "Jeff Hall",
      "Daniel Lincoln",
      "James Wilhoit",
      "Ian Howfield"
      ]
    },
    {
      "When Tennessee played and defeated Florida in 1998 at home, the defense caused 4 fumbles. What defensive player was responsible for causing three of those fumbles?": [
      "Al Wilson",
      "Raynoch Thompson",
      "Shawn Ellis",
      "Deon Grant"
      ]
    },
    {
      "During the contest with South Carolina, Tee Martin set an NCAA record for consecutive completions. How many consecutive completions did he have in the game?": [
      "23",
      "26",
      "21",
      "18",
      "12"
      ]
    },
    {
      "During the famous game with Arkansas, which Vol won 28 to 24 after trailing 21 to 3, who was the quarterback who stumbled and fumbled?": [
      "Mitch Mustain",
      "Tyler Wilson",
      "Ryan Mallett",
      "Clint Stoerner"
      ]
    },
    {
      "Tennessee coach Phillip Fulmer was named the SEC Coach of the Year following his national championship run. What other honor was bestowed on Coach Fulmer?": [
      "The Home Depot Coach of The Year Award",
      "Paul Bear Bryant Award",
      "Liberty Mutual Coach of the Year Award",
      "Herbie Award"
      ]
    },
    {
      "What was Tennessee's AP rank coming into the 1998 season?": [
      "10",
      "8",
      "13",
      "5",
      "19",
      "14"
      ]
    },
    {
      "Who was Tennessee's opponent when Jamal Lewis saw his season come to an end due to injury?": [ 
      "Auburn",
      "Alabama",
      "Houston",
      "Georgia"
      ]
    },
    {
      "Who did Tennessee play for the SEC Championship?": [
      "Mississippi State",
      "Auburn",
      "Alabama",
      "LSU"
      ]
    },
    { 
      "Which player was not selected in the first round of the 1991 draft?": [ 
      "Chuck Webb",
      "Charles McRae",
      "Antone Davis",
      "Alvin Harper"
      ]
    },
    {
      "Which of the following Vol wide receiver was drafted in the 1st round of an NFL draft.": [
      "Marcus Nash",
      "Joey Kent",
      "Peerless Price",
      "Carl Pickens"
      ]
    },
    {
      "Which wide receiver was an overall 11th pick in the NFL draft?": [
      "Anthony Hancock",
      "Anthony Miller",
      "Alvin Harper",
      "Tim McGee"
      ]
    },
    {
      "Who was the first Tennessee Volunteer ever selected in the NFL draft?": [
      "Roy Rose",
      "George Cafego",
      "Bowden Wyatt",
      "Phil Dickens"
      ]
    },
    {
      "Steve DeLong was drafted in the first round of the NFL and AFL drafts in 1965. Which two teams selected him?": [ 
      "Chicago & San Diego",
      "Pittsburgh & San Diego",
      "Chicago & Pittsburgh",
      "Dallas & Pittsburgh"
      ]
    },
    {
      "Which of the following defensive linemen was not a first round draft pick?": [
      "Leonard Little",
      "Todd Kelly",
      "Shaun Ellis",
      "Chris Mims"
      ]
    },
    {
      "In 1970, Dallas selected three Tennessee Vols. Which of the following players was not selected that year?": [
      "Richmond Flowers",
      "Pete Athas",
      "Steve Kiner",
      "Ken DeLong"
      ]
    },
    {
      "Which two Volunteers were selected back-to-back in the fourth round of the 1977 draft?": [
      "Larry Seivers & Mickey Marvin",
      "Larry Seivers & Craig Colquitt",
      "Mickey Marvin & Andy Spiva",
      "Andy Spiva & Craig Colquitt"
      ]
    },
    {
      "From 1967 to 2000, how many Tennessee kickers and punters have been selected in the NFL draft?": [
       "11",
       "9",
       "6",
       "14"
       ]
    },
    {
	  "Who was the first ever All-American for Tennessee?": [
	  "Gene McEver",
	  "Bobby Dodd",
	  "Herman Hickman",
	  "Bowden Wyatt",
	  "Bob Foxx"
      ]
    },
    {
      "Tennessee QB Bobby Dodd went on to coach what school for 20+ years?": [ 
      "Georgia Tech",
      "Tennessee",
      "Ole Miss",
      "South Carolina",
      "Vanderbilt"
      ]
    },
    {
      "Who is Tennessee's only three-time All-American?": [ 
      "Bob Suffridge",
      "Gene McEver",
      "Bowden Wyatt",
      "Peyton Manning",
      "Doug Atkins"
      ]
    },
    {
      "Who was MVP of the 1998 SEC Championship Game?": [
      "Peerless Price",
      "Tee Martin",
      "Cedric Wilson",
      "Travis Henry",
      "Jamal Lewis"
      ]
    },
    {
      "Which QB is 2nd all time in career passing touchdowns behind Peyton Manning in the Tennessee record books?": [
      "Casey Clausen",
      "Erik Ainge",
      "Tyler Bray",
      "Tee Martin",
      "Heath Shuler"
      ]
    },
    {
      "Who is the only Tennessee RB with over 3,000 career rushing yards?": [ 
      "Travis Henry",
      "Arian Foster",
      "James Stewart",
      "Jamal Lewis",
      "Johnnie Jones"
      ]
    },
    {
      "What year did Johnny Majors lead Tennessee to a win over Alabama breaking a 11-game losing streak to the Crimson Tide?": [ 
      "1982",
      "1978",
      "1979",
      "1980",
      "1981"
      ]
    },
    {
      "Lane Kiffin coached the Vols in a single bowl game which resulted in a bad loss to which team?": [
      "Virginia Tech",
      "Clemson",
      "Nebraska",
      "Michigan State",
      "Texas Tech"
      ]
    },
    {
      "Who is the 2nd most winning Tennessee head coach of all time behind Robert Neyland?": [ 
      "Phillip Fulmer",
      "Doug Dickey",
      "Bill Battle",
      "John Barnhill",
      "Johnny Majors"
      ]
    },
    {
      "Before arriving at Tennessee, where has Butch Jones NOT coached?": [
      "Troy",
      "West Virginia",
      "Cincinnati",
      "Central Michigan",
      "Ferris St."
      ]
    }
 ];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

     	//if (event.session.application.applicationId !== "arn:aws:lambda:us-east-1:424986697535:function:whatsMyFavorite") {
	    //	context.fail("Invalid Application ID");
        //}

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Tennessee Football Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Welcome to Tennessee Football Trivia. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "In Tennessee Football Trivia, I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer."
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}