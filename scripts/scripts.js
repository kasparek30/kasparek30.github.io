$(document).on("scroll",function(){
    if($(document).scrollTop()>300){
        $("header").removeClass("small").addClass("large");
    } else{
        $("header").removeClass("large").addClass("small");
    }
});
