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
      let id = $(this).data("id");
      let burger = $(this).data("burger");
  
      let devoured = {
        devoured: burger
      };
  
      submitBurger(`/api/burgers/${id}`, "PUT", devoured)
    });

    $(".create-form").on("submit", function(event) {

      event.preventDefault();
      let newBurger = {
        name: $("#new-Burger").val().trim(),
      };

      submitBurger("/api/burgers", "POST", newBurger);
    });

    $(".tbPuke").on("click", function(event) {
      let id = $(this).data("id");
      let burger = $(this).data("burger");
  
      let devoured = {
        devoured: burger
      };
  
      submitBurger(`/api/burgers/${id}`, "DELETE", devoured);
    });

});