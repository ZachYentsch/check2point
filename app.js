let ticker = 0;
let clU = 1;
let manUps = 0;

let clickUpgrades = {
    mixup: {
        price: 50,
        quantity: 0,
        multiplier: 1
    }
};
let automaticUpgrades = {
    manager: {
        price: 100,
        quantity: 0,
        multiplier: 25
    }
};

function mine() {
    let template = ''
    ticker += clU
    template += `${ticker}`
    document.getElementById('counter').innerHTML = template
}

function clickUp() {
    let template = ''
    let template1 = ''
    let template2 = ''
    template += `${ticker}`
    template1 += `${clU}`
    template2 += `${clickUpgrades.mixup.price}`
    if (ticker >= clickUpgrades.mixup.price) {
        clU += 1
        ticker -= clickUpgrades.mixup.price
        clickUpgrades.mixup.price = Math.round(clickUpgrades.mixup.price * 1.25);
        document.getElementById('counter').innerHTML = template
        document.getElementById('mixUp').innerHTML = template1
        document.getElementById('mxUpPrice').innerHTML = template2
    }
}

function autoUp() {
    let template = ''
    let template2 = ''
    if (ticker >= automaticUpgrades.manager.price) {
        manUps += 1;
        ticker -= automaticUpgrades.manager.price;
        template += `${manUps}`
        template2 += `${automaticUpgrades.manager.price}`
        document.getElementById('manUp').innerHTML = template
        document.getElementById('autoManPrice').innerHTML = template2
    }
    startInterval()
}

function startInterval() {
    setInterval(() => {
        ticker += manUps
    }, 3000)

}