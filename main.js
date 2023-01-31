$(document).ready(function(){
    $("header button").click(function(){
        $("form").slideDown()
    })
    $("#cancel").click(function(){
        $("form").slideUp()
    })
    $("form").on("submit", function(e){
        e.preventDefault()
        let newphoto = $("#new-photo").val()
        const NewItem = $('<li></li>')
        $(`<img src="${newphoto}" alt="New item">`).appendTo(NewItem)
        $(`<div class="overlay-image">
        <a href="${newphoto}" title="Real size image" target="_blank">
            Real size image
        </a>
        </div>`).appendTo(NewItem)
        $(NewItem).appendTo("ul")
    })
});