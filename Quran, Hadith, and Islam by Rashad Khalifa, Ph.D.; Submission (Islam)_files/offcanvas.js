$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
  $("#quickLink").click(function () {
	$(this).text(function(i, text){
		  return text === "Quicklinks" ? "Close >" : "Quicklinks";
	  })
	});  
});