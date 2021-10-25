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
    let price = $(this).contents().find(".price").first().text();
    href += "&price=";
    href += price;
    $(this).attr("href", href);
});

$(".cart-link").click(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const image = urlParams.get('pic');
    const title = urlParams.get("title");
    const price = urlParams.get("price");
    let href = $(this).attr("href");
    href += `?pic=${image}&title=${title}&price=${price.replace("$"," ")}`;
    $(this).attr("href", href);
});

$("#checkout-btn").click(function(){
    let total = document.getElementById("total").textContent;
    let qty = document.getElementById("qty").textContent;
    let href = $(this).attr("href");
    href += `?total=${total}`
    href += `&qty=${qty}`;
    $(this).attr("href", href);
})

function addToCart(src, title, price){
    let cart = document.querySelector('#cart');
    let mainDiv = document.createElement("div");
    let classes = ["card", "mb-3", "bg-dark", "pb-4", "border-bottom"];
    mainDiv.classList.add(...classes);

    let innerDiv = document.createElement("div");
    classes = ["row", "no-gutter", "justify-content-center"];
    innerDiv.classList.add(...classes);

    let imgDiv = document.createElement("div");
    classes = ["col-md-2", "d-flex", "justify-content-center"];
    imgDiv.classList.add(...classes);

    let img = document.createElement("img");
    img.src = src;
    img.className = "card-img";
    img.alt = "cart-item";
    imgDiv.appendChild(img);

    innerDiv.appendChild(imgDiv);

    let col2 = document.createElement("div");
    classes = ["col-md-8", "d-flex", "align-items-center", "text-center"];
    col2.classList.add(...classes);

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "card-body";

    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = title.replace("-"," ");
    bodyDiv.appendChild(h5);

    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = `$${price}`;
    bodyDiv.appendChild(p);
    col2.appendChild(bodyDiv)
    innerDiv.appendChild(col2);
    mainDiv.appendChild(innerDiv);
    cart.append(mainDiv);
    updateCount();
    updateTotal(price);
}
$(".qty").change(function(){
    updateCount();
})
function updateCount(){
    let iC = document.querySelectorAll("#cart .card").length;
    let btn = document.querySelector(".btn span").textContent = iC;
}
function updateTotal(addedPrice){
    let total = document.getElementById("total");
    let price = parseInt(total.textContent);
    total.textContent = price + parseInt(addedPrice);
}