$(function() { 
"use strict"
    var $square = $('.square');
    var $start = ('#start');
    var $title = $('#title');
    var $timer = $('#timer');
    var $score = $('#score');
    var popUp = $square;
    var i = 0;
    var iconsArray = [];
    var time = 50;
    //Easy button
    $('#easy').click(function() {
        console.log("no")
    })
    //Game Function
    $($start).click(function() {
        time = 50;
        i = 0;
        $score.html("Score: " + i)
        function togglePop() {
            var random = parseInt(Math.random()*($square.length));
            var randomPic = parseInt(Math.random()*8);
            var popUp = $square[random];
            $(popUp).addClass('pop').css('background-image', 'url("/IMG/GoTicons'+[randomPic]+'.png")');
            //Difficulty Increase
            if ( i > 10) {
                setTimeout(function() {
                    $title.html("Level 2");
                    $(popUp).removeClass('pop').css('background-image', '');
                }, 700)
            } else {
                setTimeout(function() {
                    $(popUp).removeClass('pop').css('background-image', '');
                }, 1000)
            }
            //Score Up
            $(popUp).click(function() {
                if ($(this).hasClass('pop')) {
                    i++;
                    time++;
                    $score.html("Score: " + i)
                    setTimeout(function() {
                        $timer.html("Time: " + time + "+1")
                    }, 300)                    
                }
                $(this).removeClass('pop').css('background-image', '');
            })
        }
        // Interval for Pop & Timer
        var gameTime = setInterval(togglePop, 2000);
        var gameOver = setInterval(function() {
            $timer.html("Time: " + time)
            if (time > 0) {
                time -= 1;
            } else {
                clearInterval(gameTime);
                clearInterval(gameOver);
                $title.html("Game Over");
                setTimeout(function() {
                    $title.html("Whack-A-Something");
                }, 2000)
            }
        }, 1000)
        // Disable Start Button
        if (time > 0) {
            $($start).prop("disabled", true);
        } else {
            $($start).prop("enabled", true);
        }
    })
});