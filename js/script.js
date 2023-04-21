

$(document).ready(function(){
  localStorage.clear();
  let video = $('video');

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $("html, body").animate({
    scrollTop: $(".scene-1").offset().top
  }, 500);

  $(".button-1").click(function(event){  
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $(".scene-2").offset().top
    }, 500);


    $("#header-logo").css("height", "10vh");
    $("#header-logo").css("top", "6vh");

    $('video')[0].play();
   
  });

  $('.video').on('ended', function() {
    $(this).remove();
  });


  $(".button-2").click(function(event){  
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $(".scene-kraam-1").offset().top
    }, 500);

    $(".meter").css("opacity", "100");

    $("#myAudio")[0].play();
  });

  $("#naar5").click(function(event){  
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $(".scene-5").offset().top
    }, 500);
  });

  $("#animatie").click(function(event){  
    event.preventDefault();
    $(this).css("display", "block");
    $(".redcircle").css("top", "60%");
    $(".redcircle").css("height", "75%");
    $(".groen").css("padding-top", "5vh");
    $("#header-logo").css("left", "6vh");
    $("#header-logo").css("top", "6vh");
    $(".item").css("opacity", "100");
    $(this).remove();
  });

  $("#naar6").click(function(event){  
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $(".scene-6").offset().top
    }, 500);
  });


  $('#header-logo').click(function() {
    location.reload();
  });

  $('.herstart').click(function() {
    location.reload();
  });


  $(".cross").click(function(event){  
    event.preventDefault();
    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");
    console.log(dezePop); 
  });


  $(".kraampje").click(function(event){  
    event.preventDefault();
    var dezeNieuwePop = $(this).attr('id');
    $("#pop"+ dezeNieuwePop +"").css("display", "block");
    console.log(dezePop); 
  });









  $("#a1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('a', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-2").offset().top
    }, 500);

    $(".meter-inside").css("height", "calc(1/7*2*100%)");
    $(".aar").html("JA");
  });

  $("#a2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('a', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-2").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*2*100%)");
    $(".aar").html("NEE");


  });


  $("#b1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('b', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-3").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*3*100%)");
    $(".vis").html("NEE");
  });

  $("#b2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('b', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-3").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*3*100%)");
    $(".vis").html("JA");
  });


  $("#c1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('c', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-4").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*4*100%)");
    $(".ban").html("NEE");
  });

  $("#c2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('c', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-4").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*4*100%)");
    $(".ban").html("JA");
  });



  $("#d1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('d', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-5").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*5*100%)");
    $(".kom").html("NEE");
  });

  $("#d2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('d', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-5").offset().top
    }, 500);

    $(".meter-inside").css("height", "calc(1/7*5*100%)");
    $(".kom").html("JA");
  });


  $("#e1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('e', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-6").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*6*100%)");
    $(".ei").html("NEE");
  });

  $("#e2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('e', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-6").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*6*100%)");
    $(".ei").html("JA");
  });


  $("#f1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('f', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-7").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*7*100%)");
    $(".the").html("NEE");
  });

  $("#f2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('f', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-kraam-7").offset().top
    }, 500);


    $(".meter-inside").css("height", "calc(1/7*7*100%)");
    $(".the").html("JA");
  });


  $("#g1").click(function(event){  
    event.preventDefault();
    localStorage.setItem('g', 'true');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-4").offset().top
    }, 500);


    $(".meter").css("opacity", "0");
    $(".mel").html("NEE");
  });

  $("#g2").click(function(event){  
    event.preventDefault();
    localStorage.setItem('g', 'false');

    var dezePop = $(this).parent().attr('id');
    $("#"+ dezePop +"").css("display", "none");

    $("html, body").animate({
      scrollTop: $(".scene-4").offset().top
    }, 500);

    $(".meter").css("opacity", "0");
    $(".mel").html("JA");
  });



  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // if the user is using a mobile device, hide the large image
    $('.overlay').css("display", "block");
  }











})
