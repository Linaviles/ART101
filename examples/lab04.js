 let count = 0;
 let moodCount = 0;
 let buttonCreature = {
    name: "Manchita",
    species: "Cat",
    favoriteFood: "kibble",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};
$("#needy-button").click(function () {

    count +=1;

    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];
    let message = "<p>You fed me " + count + " times.</p>";
    $("#output").html(message);
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    message = message + "<p>My mood is " + buttonCreature.moods[moodCount]+ ".</p>";
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    $("#output").html(message);
    if(moodCount == 5){
        moodCount = 0;
    }
    moodCount +=1;
});
