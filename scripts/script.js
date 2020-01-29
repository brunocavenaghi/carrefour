function formatDate(date) {
  if(date == undefined) date = new Date();
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join(' - ');
}


$(function(){ 

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 80) {
        $("header").addClass("scrollDown");
    }
    else {
        $("header").removeClass("scrollDown");
    }
  });

  $('.slider, .wishes, .populars').slick({
    arrows : false,
    dots : true
  });

  $('.showCategory').click(function(){
    if($('.sidebar-shop').hasClass('open'))
      $('.sidebar-shop').removeClass('open');
    else
      $('.sidebar-shop').addClass('open');
  });


  $.get('header.html',function(data){ 
    $('header').html(data);
  });
  $.get('footer.html',function(data){ 
    $('footer:not(.login)').html(data);
  });

  $('.finish-purchase').click(function(e){
    e.preventDefault();
    window.location.href = "success.html"
  });

  $('.login-btn').click(function(e){
    e.preventDefault();
    window.location.href = "index.html"
  });

 });