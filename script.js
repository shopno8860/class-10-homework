$(document).ready(function () {
    $("#submenu_one, #submenu_two").hide();
      
    $("#categories").click(function (e) {
      e.stopPropagation();
      $("#submenu_two").hide(); 
      $("#submenu_one").toggle();
    });
  
    $("#p_details").click(function (e) {
      e.stopPropagation();
      $("#submenu_one").hide(); 
      $("#submenu_two").toggle();
    });
  
    $(document).click(function () {
      $("#submenu_one, #submenu_two").hide();
    });
    
    $("#submenu_one, #submenu_two").click(function (e) {
      e.stopPropagation();
    });
  });