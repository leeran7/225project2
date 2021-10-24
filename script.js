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
    let price = $(this).contents().find("#price").first().text();
    href += "&price=";
    href += price;
    $(this).attr("href", href);
});

$(".cart-link").click(function(){
    let href = $(this).attr("href");
    href += "?pic=";
    const src = $(".product-info").find("#image").attr("src");
    href += src;
    const title = $(".product-info").contents().find("#title").text();
    href += "&title=";
    href += title.replace(/\s/g, '-');
    
    const price = $(".product-info").contents().find("#item-price").text();
    // console.log(price);
    href += "&price=";
    href += price;
    addToCart(src, title, price);
    $(this).attr("href", href);
});

function addToCart(src, title, price){
    let cart = document.querySelector('#cart');
    let mainDiv = document.createElement("div");
    // ["d-flex", "col-lg-4", "no-gutters", "justify-content-center"]
    let classes = ["card", "col-lg-4", "no-gutters", "justify-content-center", "align-items-center", "bg-dark"];
    mainDiv.classList.add(...classes);
    let img = document.createElement("img");
    img.src = src;
    
    img.className = "card-img";
    img.alt = "cart-item";
    mainDiv.appendChild(img);

    let innerDiv = document.createElement("div");
    classes = ["d-flex", "card-body", "justify-content-around", "align-items-center", "flex-column", "bg-dark"];
    innerDiv.classList.add(...classes);
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = title;
    innerDiv.appendChild(h5);
    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = price;
    innerDiv.appendChild(p);
    mainDiv.appendChild(innerDiv);

    cart.append(mainDiv);
}
