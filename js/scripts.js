


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
        $("#img1").css("opacity","0.3")
        $(".project-name").show();
    })
    $(".work2").mouseenter(function(){
        $("#img2").css("opacity","0.3")
        $(".project-name1").show();
    })
    $(".work3").mouseenter(function(){
        $("#img3").css("opacity","0.3")
        $(".project-name2").show();
    })
    $(".work4").mouseenter(function(){
        $("#img4").css("opacity","0.3")
        $(".project-name3").show();
    })   
    $(".work5").mouseenter(function(){
        $("#img5").css("opacity","0.3")
        $(".project-name4").show();
    })
    $(".work6").mouseenter(function(){
        $("#img6").css("opacity","0.3")
        $(".project-name5").show();
    })
    $(".work7").mouseenter(function(){
        $("#img7").css("opacity","0.3")
        $(".project-name6").show();
    })
    $(".work8").mouseenter(function(){
        $("#img8").css("opacity","0.3")
        $(".project-name7").show();
    })
    $(".work1,.work2,.work3,.work4,.work4,.work5,.work6,.work7,.work8").mouseleave(function(){
        $("#img1").css("opacity","1.0")
        $(".project-name").hide();

        $("#img2").css("opacity","1.0")
        $(".project-name1").hide();

        $("#img3").css("opacity","1.0")
        $(".project-name2").hide();

        $("#img4").css("opacity","1.0")
        $(".project-name3").hide();

        $("#img5").css("opacity","1.0")
        $(".project-name4").hide();

        $("#img6").css("opacity","1.0")
        $(".project-name5").hide();

        $("#img7").css("opacity","1.0")
        $(".project-name6").hide();

        $("#img8").css("opacity","1.0")
        $(".project-name7").hide();
    })

    $(".contact-us form").submit(function(){
            var fullName = $("#name").val();
            var email = $("#email").val();
            var message=$("#message").val();
            if (fullName!=null && email!=null && message!=null) {
                toastr.info("Thank you "+fullName +" for contacting us! We shall send you areply to "+ email+" as soon as possible.")
                event.preventDefault(); 
               
            }
             else {
                alert("Enter input before sending message")
                event.preventDefault();
            }

        /*$("#popup").*/
    })


})