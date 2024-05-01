//Marlene Habib
//Instructor: Dr. Yang
//OLA 4
//meme.js
//Date: 3-21-2024
//Due Date: 3-21-2024

//Ready function 
$(document).ready(function(){

    //KeyUp event for top text
    $('#top-text').keyup(function() {
        var TopText = $('#top-text').val();
        $('#top-caption').html(TopText);
    });

    //Keyup event for bottom text
    $('#bottom-text').keyup(function() {
        var BottomText = $('#bottom-text').val();
        $('#bottom-caption').html(BottomText);
    });

    //Keyup event for image url
    $('#image-url').keyup(function() {
        var ImageUrl = $('#image-url').val();
        $('#img1').attr('src', ImageUrl);
    });

    //Keyup function for the image
    $(document).keyup(function(){
        if (event.which == 37) {
            //Move left
            $("div#meme3").animate({ left: '-=100px' });
        } else if (event.which == 39) {
            //Move right
            $("div#meme3").animate({ left: '+=100px' });
        } else if (event.which == 38) {
            //Move up
            $("div#meme3").animate({ top: '-=100px' });
        } else if (event.which == 40) {
            //Move down
            $("div#meme3").animate({ top: '+=100px' });
        }
    });
});
