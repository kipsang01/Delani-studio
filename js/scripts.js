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
        $("#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8").css("background-color" ,"rgba(0, 0, 0, 0.5)")
        $(".project-name").show();
    })
    $(".work1,.work2,.work3,.work4,.work4,.work5,.work6,.work7,.work8").mouseleave(function(){
        $("#img1").css({"background":"rgba(0, 0, 0, 0.5);" ,"opacity":"1.0"})
        $(".project-name").hide();
    })


})