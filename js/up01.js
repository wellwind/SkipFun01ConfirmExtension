$(document).ready(function(){
    $(".btn-pink").each(function(){
        if($(this).text() === "我已滿18歲 進入"){
            document.location = $(this).attr("href");
        }
    });
});