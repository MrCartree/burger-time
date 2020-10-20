function submitBurger(path, type, data) {
  $.ajax(path, {
    type,
    data,
  }).then(
    function() {
      location.reload();
    }
  );
};


$(function() {
    $(".tbDevoured").on("click", function(event) {
      console.log("fuck you");
      var id = $(this).data("id");
      var burger = $(this).data("burger");
  
      var devoured = {
        devoured: burger
      };
  
      submitBurger(`/api/burgers/${id}`, "PUT", devoured)
    });

    $(".create-form").on("submit", function(event) {

      event.preventDefault();
      var newBurger = {
        name: $("#new-Burger").val().trim(),
      };

      submitBurger("/api/burgers", "POST", newBurger);
    });

    $(".tbPuke").on("click", function(event) {
      var id = $(this).data("id");
      var burger = $(this).data("burger");
  
      var devoured = {
        devoured: burger
      };
  
      submitBurger(`/api/burgers/${id}`, "DELETE", devoured);
    });

});