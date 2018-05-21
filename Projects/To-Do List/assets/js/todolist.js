// Check off specific to-dos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

// Click on X to delete to-do
$("ul").on("click", ".delete", function(event) {
    event.stopPropagation();

    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
});

$("input[type=text]").on("keypress", function(event) {
    if (event.which === 13) {
        let todoText = ($(this).val());
        $(this).val("");
        if (todoText !== "") {
            $("ul").append("<li>"+ todoText + " <span class='delete'><i class='far fa-trash-alt'></i></span></li>");
        }
    }
});

$(".fa-plus-square").on("click", function() {
    $("input[type=text]").slideToggle(300);
});
