$(function() {
    $(".tbDevoured").on("click", function(event) {
      var id = $(this).data("id");
      var burger = $(this).data("burger");
  
      var devoured = {
        devoured: burger
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {

      event.preventDefault();
      var newBurger = {
        name: $("#new-Burger").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });

});