$(function() {
    $(".tbDevoured").on("click", function(event) {
        let id = $(this).data("id");
        let newEat = $this.data("devoured");

        let newEatState = {
            devoured: newEat
        };

        $.ajax("/")
    });
});