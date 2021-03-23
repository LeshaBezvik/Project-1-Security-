$(document).ready(function(){
    $(".top-menu-burger").click(function(event){
        $(".top-menu-burger, .top-menu").toggleClass('active');
        $("body").toggleClass("lock");
    });

})
/*
$(document).ready(function(){
        $(".o-nas, .uslugi, .clients-review, .contacts").click(function(event){
            $(".top-menu.active").toggleClass('hide');
    });
});
*/