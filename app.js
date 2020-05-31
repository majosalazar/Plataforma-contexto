$('.menu-hamb').click(function(){
  $(this).toggleClass('open');
})

jQuery(document).ready( function() {
  jQuery('.chevron').on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });
 });