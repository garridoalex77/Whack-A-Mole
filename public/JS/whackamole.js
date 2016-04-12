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

    $('#easy').click(function() {

    })

    $($start).click(function() {
        time = 50;
        i = 0;
        $score.html("Score: " + i)
        function togglePop() {
            var random = parseInt(Math.random()*($square.length));
            var randomPic = parseInt(Math.random()*8);
            var popUp = $square[random];
            $(popUp).addClass('pop');
            $(popUp).css('background-image', 'url("/IMG/GoTicons'+[randomPic]+'.png")');
            if ( i > 10) {
                setTimeout(function() {
                    $title.html("Level 2");
                    $(popUp).removeClass('pop');
                    $(popUp).css('background-image', '');
                }, 700)
            } else {
                setTimeout(function() {
                    $(popUp).removeClass('pop');
                    $(popUp).css('background-image', '');
                }, 1000)
            }
            $(popUp).click(function() {
                if ($(this).hasClass('pop')) {
                    i++;
                    time++;
                    $score.html("Score: " + i)
                    setTimeout(function() {
                        $timer.html("Time: " + time + "+1")
                    }, 300)                    
                }
                $(this).removeClass('pop');
                $(this).css('background-image', '');
            })
        }
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
                    // location.reload();
                }, 2000)
            }
        }, 1000)
        if (time > 0) {
            $($start).prop("disabled", true);
        } else {
            $($start).prop("enabled", true);
        }
    })
});