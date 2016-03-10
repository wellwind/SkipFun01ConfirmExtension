$(document).ready(function(){
    $(".cbtn-warning").each(function(){
        if($(this).text() === "確定並觀看"){
            document.location = $(this).attr("href");
        }
    });
});