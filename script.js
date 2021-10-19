$("a").hover(
    function(){
        $(this).toggleClass('active')
    }
)
$("product").ready(function() {
    $('.hover').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hoverEffect');
    });
});