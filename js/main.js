$(".input").focus(function() {
  $("#search").addClass("move");
});
$(".input").focusout(function() {
  $("#search").removeClass("move");
  $(".input").val("");
});

$(".fa-search").click(function() {
  $(".input").toggleClass("active");
  $("#search").toggleClass("active");
});
