let bankAcc = 500;

let gamble = [-500, 2, 500, -40, 25, 1500, -800, -2, 80, -50,-2000];



$("#derp").click( function() {

    let random = Math.floor(Math.random()* gamble.length);
    bankAcc = bankAcc + gamble[random];
    let message = "<p> Pusheen bank account: " + bankAcc + "</p>";
    messages01(bankAcc);
    $("#output").html(message);


});

function messages01(x){
    let newMessage ="<p></p>";
    if (x >= 1500){
        newMessage = "<p>Pusheen can pay her rent now! She's debt free.</p>";
        $("#second").html(newMessage);
    }
    if((x<1500)&&(x>=500)){
        newMessage = "<p>This is enough earnings, lets play it safe</p>";
        $("#second").html(newMessage);
    }
    if((x<500)&&(x>=0)){
        newMessage = "<p>Okay, lets call it quits now..</p>";
        $("#second").html(newMessage);
    }
    if((x<0)){
        newMessage = "<p>Please stop! You're gonna bankrupt her!</p>";
        $("#second").html(newMessage);
    }
    if(x<=-1000){
        newMessage = "<p>You have a terrible addiction..</p>";
        $("#second").html(newMessage);
    }

};
