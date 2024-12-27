$(document).ready(function () {
    $("#submenu_one, #submenu_two").hide();
      
      $("#categories").on("click", function (e) {
        e.stopPropagation();
        $("#submenu_two").hide(); 
        $("#submenu_one").toggle();
      });
  
      $("#p_details").on("click", function (e) {
        e.stopPropagation();
        $("#submenu_one").hide(); 
        $("#submenu_two").toggle();
      });
  
      $(document).on("click", function () {
        $("#submenu_one, #submenu_two").hide();
      });
      
      $("#submenu_one, #submenu_two").on("click", function (e) {
        e.stopPropagation();
      });
  });