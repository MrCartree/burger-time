$(function() {
    $(".tbDevoured").on("click", function(event) {
      var id = $(this).data("id");
      var burger = $(this).data("burger");
  
      var devoured = {
        devoured: burger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          console.log("changed devoured to", burger);
          // Reload the page to get the updated list
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
          console.log("created new burger");

          location.reload();
        }
      );
    });







});