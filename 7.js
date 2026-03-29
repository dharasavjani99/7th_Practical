$(document).ready(function(){

    let images = $(".thumbnails img"); 
    let currentIndex = 0;

    $(".thumbnails img").click(function(){
        let newSrc = $(this).attr("src");

        currentIndex = images.index(this); 

        $("#display").fadeOut(function(){
            $("#display").attr("src", newSrc).fadeIn();
        });
    });

    $(".btn2").click(function(){
        currentIndex++;

        if(currentIndex >= images.length){
            currentIndex = 0;
        }

        let newSrc = $(images[currentIndex]).attr("src");

        $("#display").slideUp(function(){
            $("#display").attr("src", newSrc).slideDown();
        });
    });

    $(".btn1").click(function(){
        currentIndex--;

        if(currentIndex < 0){
            currentIndex = images.length - 1;
        }

        let newSrc = $(images[currentIndex]).attr("src");

        $("#display").slideUp(function(){
            $("#display").attr("src", newSrc).slideDown();
        });
    });

    $("#display").dblclick(function(){
        $(this).animate({
            height: "700px",
            width : "80%",
            border: "2px solid black",
        },1000);
        $(this).animate({
            height: "500px",
            width : "60%",
        },1000);
    });

    $(".title").mouseenter(function(){
        $(this).css('color','#190005');
        $(".title").mouseleave(function(){
            $(this).css('color','#5a2a2a');
        });
    });

    $("input").focus(function(){
        $(this).css('background-color','beige');
        $("input").blur(function(){
            $(this).css('background-color','white');
        });
    });

    $("#inputBox").keyup(function(){
        $("#textOutput").text($(this).val());
    });

});

