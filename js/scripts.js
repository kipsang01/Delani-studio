$(document).ready(function(){
    $(".design").click(function(){
        $("#fig1").toggle()
        $(".txt1").toggle()
    })

    $(".development").click(function(){
        $("#fig2").toggle()
        $(".txt2").toggle()
    })

    $(".product-management").click(function(){
        $("#fig3").toggle()
        $(".txt3").toggle()
    })

    $(".work1").mouseenter(function(){
        $("#img1").css("background-color" ,"rgba(0, 0, 0, 0.5)")
        $(".project-name").show();
    })
    $(".work1").mouseleave(function(){
        $("#img1").css({"background":"rgba(0, 0, 0, 0.5);" ,"opacity":"1.0"})
        $(".project-name").hide();
    })


})