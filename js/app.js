$(document).ready(function(){
  $(".delete").click(function(event){
    $(event.target).closest("li").hide();
    $(this).css("float:left");
  });
  var listitem = $("txt-list-input").text();
});