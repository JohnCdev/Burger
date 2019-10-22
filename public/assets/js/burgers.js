$(document).ready(function () {

    $(document).on("click", "#newBurger", newBurger);
    $(document).on("click", ".devourBurger", devourBurger);

    function newBurger() {
        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
        };

        if (newBurger.burger_name === "") {
            return alert("Burger name cannot be empty")
        } else if (newBurger.burger_name.length > 100) {
            return alert("Burger name must be less than 100 characters")
        }

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new Burger");
                location.reload();
            }
        );
    }

    function devourBurger() {
        let id = $(this).data("id");

        $.ajax("/api/burger", {
            type: "PUT",
            data: {
                id: id
            }
        }).then(
            function () {
                console.log("deleted cat", id);
                location.reload();
            }
        );
    }
});
