$(document).ready(function(){
    $(".table_title").click(function(e){
        $(this).next().slideToggle();
        $(this).children().slideToggle(0);
    });
});