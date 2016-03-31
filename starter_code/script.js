var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var x = Math.floor(Math.random() * 3);
    var rps = ["Rock", "Paper", "Scissors"];
    var ai = rps[x];
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if ("Rock" === "Rock") {
        return ('draw');
    };
    if ("Rock" === "Scissors") {
        return ('ai');
        aiPoint + 1;
    };
    if ("Rock" === "Paper") {
        return ('user');
        userPoint + 1;
    };
    if ("Scissors" === "Rock") {
        return ('user');
        userPoint + 1;
    };
    if ("Scissors" === "Scissors") {
        return ('draw');
    };
    if ("Scissors" === "Rock") {
        return ('ai');
        aiPoint + 1;
    };
    if ("Paper" === "Rock") {
        return ('ai');
        aiPoint + 1;
    };
    if ("Paper" === "Scissors") {
        return ('user');
        userPoint + 1;
    }
    if ("Paper" === "Paper") {
        return ('draw');
    }
    // This function sets the scoreboard with the correct points
    function setScore() {
        $
}
};

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ('user' === winner) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    }
    else if (winner === 'draw') {
        $('#message').delay(50).text('Draw! Click a box to play again');
    }
    else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function() {
    $(".token").click(function(evt) {
    $
    });
};
// (".----") is class 
});