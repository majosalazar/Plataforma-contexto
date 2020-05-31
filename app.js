$('.menu-hamb').click(function(){
  $(this).toggleClass('open');
})

jQuery(document).ready( function() {
  $('#chevron_1').addClass("active");
  jQuery('.chevron').on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });
 });