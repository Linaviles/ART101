 let count = 0;
 let phrase = "hey";

 $("#desperation").click(function() {
    count = count+5;

    $("#desperation").html("Clicked " + count + " times!");

    if (count == 10){

       text = "you clicked 10 times";
       alert(text);
    }

    if (count == 25){

       text = "you clicked 25 times";
       alert(text);
    }

    if (count == 50){

       text = "okay please stop clicking...";
       alert(text);
    }
 }); 



 