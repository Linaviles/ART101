//add creature to the list
$("#add01").click(function () {
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();
    let crName = $("#crName").val(); // retrieve value
    let eyesHtml = "";

    for(let i=0; i<crEyesNum; i++){
        eyesHtml = eyesHtml + "<div class='eye'>.</div>";
    }

    console.log(crName);
    


    if (crName.length > 2) {
        $("#list").append(`
            
            <div class="creature">
                <div class="body" style="background-color: ${crColor}">${eyesHtml}</div>
                <div class="info"> ${crName}</div>
            </div>
            `);
    }

    $("#crName").val("");

})
