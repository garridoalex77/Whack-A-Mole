$(function() { 
"use strict"
    
    var random;
    var score = 0;
    var buttonClick;

    function randomChicken (){
        var pop = $('.square');
        random = pop[Math.floor(Math.random()*pop.length)];
        animate();
        return random;
    }

    function animate(random) {
        $(random).fadeTo(500, 1);
        $(random).fadeTo(500, 0);
        $(random).click(function(){
            $(random).off("click");
            score++;
            $('#score').html("Score: " + score)
        })
    };

    $('#start').click(function(){
        $('.square').fadeOut();
        setInterval(function(){
            buttonClick = randomChicken();
            animate(buttonClick);
        }, 1500);
    });
});