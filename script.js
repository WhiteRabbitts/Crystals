var randomresult;
var lost = 0;
var win = 0;
var previous = 0;


var resetandstart = function(){

    $(".crystals").empty();

    var images = [
        'https://github.com/aalkowni90/Crystal-game/blob/master/assets/images/carton1.png?raw=true',
        'https://github.com/aalkowni90/Crystal-game/blob/master/assets/images/carton2.png?raw=true',
        'https://github.com/aalkowni90/Crystal-game/blob/master/assets/images/carton3.png?raw=true',
        'https://github.com/aalkowni90/Crystal-game/blob/master/assets/images/carton4.png?raw=true'
    ]

randomresult = Math.floor(Math.random() * 69 ) + 30;

$('#result').html('Random Number: ' + randomresult);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
        "class": 'crystal',
        "data-random": random
});

    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"
    });

    $(".crystals").append(crystal);
}
}

resetandstart();

$(document).on("click", ".crystal", function(){

    var num = parseInt($(this).attr("data-random"));

    previous+= num;

    $("#previous").html("Current Number: " + previous);

    console.log(previous);

    if(previous > randomresult){
        lost++;
        $("#lost").html("Lost: " + lost);
        previous = 0;
        $("#previous").html("Current Number: " + previous);

        resetandstart();
    }
    else if(previous === randomresult){
        win++;
        $("#win").html("Win: " + win);

        previous = 0;

        $("#previous").html("Current Number: " + previous);


        resetandstart();
    }
});