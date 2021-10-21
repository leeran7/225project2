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
    const src = $(".product-info").find("#image").attr("src");
    href += src;
    href += "&title=";
    let title = $(".product-info").contents().find("#title").text();
    href += title.replace(/\s/g, '-');
    let desc = $(".product-info").contents().find(".card-text").first().text();
    let item = `<div class="d-flex col-lg-4 no-gutters justify-content-center"><img src="${src}" class="card-img" alt="...">
            <img src="${src}" class="card-img" alt="...">
            <div class="card-body d-flex flex-column justify-content-around align-items-center text-center">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${desc}</p>
                <a href="cart.html" >Delete</a>
            </div>
        </div>`;
    $(item).appendTo(".cart-items form");
    $(this).attr("href", href);
});