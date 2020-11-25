$(".readmore-btn").on('click', function(){
    $(this).parent().toggleClass("showContent");
    var replaceText = $(this).parent().hasClass("showContent") ? "Learn Less..." : "Learn More...";
    $(this).text(replaceText);
})