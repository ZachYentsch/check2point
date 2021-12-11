let sales = 0;

let clickUpgrades = {
    beats: {
        price: 50,
        quantity: 0,
        multiplier: 1
    }
};
let automaticUpgrades = {
    vine: {
        price: 100,
        quantity: 0,
        multiplier: 25
    }
};
function mine() {
    let template = ''
    sales++;
    template += `Sales: ${sales}`
    document.getElementById('sa').innerText = template
    if (sales >= 10) {
        clickUpgrades.beats.quantity++
        sales++
        document.getElementById('beatz').style.display = "block"
    }
    else document.getElementById('beatz').style.display = "none"
}

function clickUp() {
    for (let i = `${sales}`; i < clickUpgrades.beats.quantity.length; i++) {
        const key = clickUpgrades[i];
    }
    drawClickUp()
}

function drawClickUp() {
    let template = ''
    template += `Beats: ${clickUpgrades.beats.quantity}`
    document.getElementById('Beatz').innerText = template
}