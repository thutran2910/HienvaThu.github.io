$(document).ready(function(){
  // go to top
    $("#gototop").hide()
    $(window).scroll(function(){
      if($(this).scrollTop()>=150)
      $("#gototop").show("slow")
      else
      $("#gototop").hide("slow")
    });
    $("#gototop").click(function(){
      $("html,body").animate({
        scrollTop:0
      },1000)
    });
    // question
    const path=document.getElementsByClassName('que');
    for(var i=0;i<path.length;i++)
      {
        path[i].addEventListener('click',function(){
          this.classList.toggle('active')
        });
      }
      // addQuestion
    $(".button").click(function(){
      $(".model").fadeIn("slow")
    })
    $(".table .close").click(function(){
      $(".model").fadeOut("2000")
    });
    //seeMore
    const btn=document.getElementById("btn");
    const moreBlog=document.querySelectorAll(".blog");
    var count =0;
    if(btn!=null)
    {
      btn.addEventListener("click",function  More(){
        for(let i=0;i<3;i++)
        {
            if(moreBlog.length!=0) 
            moreBlog[count++].style.display="block";
        }
        if(count == moreBlog.length)
        btn.style.display="none";
      });
    }
  });