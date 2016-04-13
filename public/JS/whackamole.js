$(function() { 
"use strict";
    var $square = $('.square');
    var $start = ('#start');
    var $title = $('#title');
    var $timer = $('#timer');
    var $score = $('#score');
    var $highScore = $('#highScore');
    var highScore = localStorage.getItem("highScore");
    var popUp = $square;
    var iconsArray = [];
    var time = 30;
    var i = 0;
    // Set HighScore if one
    if (highScore !== null){
        $highScore.html("High Score: " + highScore);
    }
    // Game Start
    $($start).click(function() {
        time = 30;
        i = 0;
        $score.html("Score: " + i);
        // Random Selector & Show popUp
        function togglePop() {
            var random = parseInt(Math.random()*($square.length));
            var randomPic = parseInt(Math.random()*7);
            var popUp = $square[random];
            $(popUp).addClass('pop').css('background-image', 'url("/IMG/GoTicons'+[randomPic]+'.png")');
            // Difficulty & Hide popUp
            if ( i > 10) {
                setTimeout(function() {
                    $title.html("Level 2");
                    $(popUp).removeClass('pop').css('background-image', '');
                }, 1000);
            } else {
                setTimeout(function() {
                    $(popUp).removeClass('pop').css('background-image', '');
                }, 1300);
            }
            // Click & Score counter
            $(popUp).click(function() {
                if ($(this).hasClass('pop')) {
                    i++;
                    time++;
                    $score.html("Score: " + i);
                    setTimeout(function() {
                        $timer.html("Time: " + time + "+1");
                    }, 300);                   
                }
                $(this).removeClass('pop').css('background-image', '');
            });
        }
        var gameTime = setInterval(togglePop, 1500);
        // End Game & Timer
        var gameOver = setInterval(function() {
            $timer.html("Time: " + time);
            if (time > 0) {
                time--;
                $($start).prop("disabled", true);
            } else {
                if (i > highScore) {
                    localStorage.setItem("highScore", i);
                }
                $highScore.html("High Score: " + localStorage.getItem("highScore"));
                clearInterval(gameTime);
                clearInterval(gameOver);
                $title.html("Game Over");
                $($start).prop("disabled", null);
                setTimeout(function() {
                    $title.html("Whack-A-Something");
                }, 3000);
            }
        }, 1000);
    });
});
