$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
