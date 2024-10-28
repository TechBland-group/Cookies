document.getElementById("main-action-button").onclick = function() {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

const links = document.querySelectorAll(".menu_item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onClick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior : 'smooth'});
    }

}


const buttons = document.querySelectorAll(".products_item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onClick = function() {
        document.getElementById("order").scrollIntoView({behavior : 'smooth'});
    }

}