$(".product-link").click(function(){
    let href = $(this).attr("href");
    href += "?pic=";
    const src = $(this).find(".card-img").attr("src");
    href += src;
    href += "&title=";
    let title = $(this).contents().find("h5").text();
    href += title.replace(/\s/g, '-');
    href += "&desc=";
    let desc = $(this).contents().find(".card-text").first().text();
    href += desc.replace(/\s/g, '-');
    $(this).attr("href", href);
});
$(".cart-link").click(function(){
    let href = $(this).attr("href");
    href += "?pic=";
    const src = $(".productInfo").find("#image").attr("src");
    href += src;
    href += "&title=";
    let title = $(".productInfo").contents().find("#title").text();
    href += title.replace(/\s/g, '-');
    $(this).attr("href", href);


    // let item = 
    // $("cart-item").

    //started implementing functionality to add items into the cart
});