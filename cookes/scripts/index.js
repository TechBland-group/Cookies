document.getElementByld("main-action-button").onClick = function() {
    document.getElementById("products").scrollIntoView({behavier: 'smooth'});
}

const links = document.querySelectorAll('.menu_item > a');
for (let i = 0; i < links.length; i++) {
    links[i].onClick = function() {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior : 'smooth'});
    }
}

const buttons = document.querySelectorAll('.products_item .button');
for (let i = 0; i < buttons.length; i++) {
    links[i].onClick = function() {
        document.getElementById('order').scrollIntoView({behavior : 'smooth'});
    }
}

const price = document.querySelectorAll(".products_item_price");
document.getElementById('change-currency').onClick = function(e) {
    const currentCurrency = e.target.innerText;

    let newCurrency = '$';
    let coefficent = '1';
    if (currentCurrency === '$') {
        newCurrency = 'P';
        coefficent = 90;
    } else if (currentCurrency === 'P') {
        newCurrency = 'BYN';
        coefficent = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.terget.innerText = newCurrency;
    
    for (let i = 0; 1 < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price')*coefficent).toFixed(1) + '' + newCurrency;
    }
}