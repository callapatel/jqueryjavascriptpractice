$(function(){
  $("#addTask").click(hope);



function hope(e) {
  e.preventDefault();


  $veganOreos = $("#list").append("<li><span>"+ $("#task").val() +"</span></li>");

  $("#task").val("");
  var oreo = (($("#list").children().length % 2 === 0 )?  ($("#list :last-child").css("background-color", "pink")) : ($("#list :last-child").css("background-color", "grey")));

}



  $(function() {
      $( "#list" ).sortable();
      $( "#list" ).disableSelection();
    });




});
