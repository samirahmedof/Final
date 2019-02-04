$(document).ready(function () {
    $(".col-lg-10 .drop").hover(function () {
        $(this).children(".down").fadeIn(100);
    }, function () {
        $(this).children(".down").fadeOut(0);
    });

    $(".rightDrop").hover(function () {
        $(this).children(".down2").fadeIn(100);
    }, function () {
        $(this).children(".down2").fadeOut(0);
    });

    $(".text-right .drop a").click(function () {
        $(this).next().slideToggle(300);
        $(this).next().addClass("active");
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".drop-search").length && $(".search").hasClass("active")) {
            $(".search").slideUp(0);

        }
        if (!$(e.target).closest(".drop-cart").length && $(".cartDown").hasClass("active")) {
            $(".cartDown").slideUp(0);
        }
    });
    $(".btnCancel").click(function () {
        $(".search").slideUp(0);
    });

    /*--------plug-in--------------*/
    $(".slide1").owlCarousel({
        items: 1,
        dots: true
    });
    $(".slide2").owlCarousel({
        items: 4,
        nav: true
    });
    $(".slide3").owlCarousel({
        items: 3,
        nav: true
    });

    $(".stars .fas").click(function(){
        $(this).addClass("clicked");
        var x=1;
        for(var i=0; i<5;i++) {
            if($(this).parent().children().eq(i).hasClass("starred")){
                $(this).parent().children().eq(i).removeClass("starred");
            }
        }
        while (x>0) {
            $(this).parent().children().eq(x-1).addClass("starred");
            if($(this).parent().children().eq(x-1).hasClass("clicked")){
                $(this).parent().children().eq(x-1).removeClass("clicked");
             break;
            }
            x++;
        }

    })

    /*--------------sebetdekileri silmek ucun---------*/
    // $(".cartDown li i").click(function(){
    //     $(this).parents().eq(2).remove();
    // })
})