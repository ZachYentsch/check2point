let ticker = 0;
let clU = 1;
let manUps = 0;
let feats = 1;
let tt = 1;

let clickUpgrades = {
    mixup: {
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    top10: {
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    feature: {
        price: 200,
        quantity: 0,
        multiplier: 1,
    }
};
let automaticUpgrades = {
    manager: {
        price: 100,
        quantity: 0,
        multiplier: 20
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

function clickUp10() {
    let template = ''
    let template1 = ''
    template += ` ${tt}`
    template1 += `${clickUpgrades.top10.price}`
    if (ticker >= clickUpgrades.top10.price) {
        clU += 10
        tt++
        ticker -= clickUpgrades.top10.price
        clickUpgrades.top10.price = Math.round(clickUpgrades.top10.price * 1.4);
        document.getElementById('topTen').innerHTML = template
        document.getElementById('topTenPrice').innerHTML = template1
    }
}

function clickUp25() {
    let template = ''
    let template1 = ''
    template += ` ${feats}`
    template1 += `${clickUpgrades.feature.price}`
    if (ticker >= clickUpgrades.feature.price) {
        clU += 25
        feats++
        ticker -= clickUpgrades.feature.price
        clickUpgrades.feature.price = Math.round(clickUpgrades.feature.price * 1.8);
        document.getElementById('feat').innerHTML = template
        document.getElementById('featurePrice').innerHTML = template1
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