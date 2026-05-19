let bankAcc = 800;
let clickCount = 1;
let gamble = [-500, 2, 500, -40, 25, 1500, -800, -2, 80, -50, -2000];

$("#derp").click(function () {

    if (clickCount <= 3) {
        let random = Math.floor(Math.random() * gamble.length);
        let message = "<p> Pusheen bank account: " + bankAcc + "</p>";
        $("#output").html(message);
        messages01(bankAcc);
        bankAcc = bankAcc + gamble[random];

    }
    if (clickCount == 4) {
        debt(800);
    }

    clickCount += 1;
});

function debt(x) {
    let userNum = prompt("YOU WERE CAUGHT GAMBLING! How much money does Pusheen have left?!");

    /* if (x < userNum) {
 
        $("#pusheen").append(`
             <div id="form">
             <p> She's gonna pay off her debt!! GAMBLING WAS THE SOLUTION!</p>
             <div id="bodyJs"><img width=200 bottom-padding=300 src='happy.png'></div>
             <div>
             `);
 
     }
     if ((x >= userNum) && (userNum > 0)) {
 
         $("#pusheen").append(`
             <div id="form">
             <p> eh she'll live :/ </p>
             <div id="bodyJs"><img width=200 bottom-padding=300 src='neutral.png'></div>
             <div>
             `);
 
     }
     if (userNum <= 0) {
 
         $("#pusheen").append(`
             <div id="form">
             <p> Now she'll never get out of debt. Never ever gamble again.. </p>
             <div id="bodyJs"><img width=200 bottom-padding=300 src='sad.png'></div>
             <div>
             `);
 }
 */

};

function messages01(x) {
    let newMessage = "<p></p>";

    if (clickCount <= 3) {
        if (x >= 1500) {
            newMessage = "<p>Pusheen can pay her rent now! She's debt free.</p>";
            $("#second").html(newMessage);
        }
        if ((x < 1500) && (x >= 500)) {
            newMessage = "<p>This is enough earnings, lets play it safe</p>";
            $("#second").html(newMessage);
        }
        if ((x < 500) && (x >= 0)) {
            newMessage = "<p>Okay, lets call it quits now..</p>";
            $("#second").html(newMessage);
        }
        if ((x < 0)) {
            newMessage = "<p>Please stop! You're gonna bankrupt her!</p>";
            $("#second").html(newMessage);
        }
        if (x <= -1000) {
            newMessage = "<p>You have a terrible addiction..</p>";
            $("#second").html(newMessage);
        }


    }
};

$("#form").click(function () {
    if (bankAcc < 800) {
        $("#form").animate(
            {
                left: '900px',
                opacity: '0.0',
                height: '150px',
                width: '150px'
            });

    }
    if (bankAcc >= 800) {

        $("#form").animate(
            {
                left: '500px'
            });

        $(this).toggleClass("transformed");
    };

});
$("#form").hover(function () {
    if (bankAcc > 800) {
        $("#message2").fadeIn();
        $("#message2").fadeIn("slow");
        $("#message2").fadeIn(3000);



    }
    if (bankAcc <= 800) {
        $("#message1").fadeIn();
        $("#message1").fadeIn("slow");
        $("#message1").fadeIn(3000);

    }
}
);
