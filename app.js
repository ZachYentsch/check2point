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
    clickUp()
    document.getElementById('sa').innerText = template
}

function clickUp(clickUps) {
    const beat = clickUpgrades[clickUps];
    for (const key in clickUpgrades) {
        if (clickUps == 'beats') {
            if (beat.multiplier == 1) {
                beat.multiplier++
            }
            else beat.multiplier++
            if (beat.quantity == 0) {
                beat.quantity++
            }
            else beat.quantity++
        }
    }
    drawClickUp()
}
function drawClickUp() {
    let template = ''
    for (const key in clickUpgrades) {
        const cUp = clickUpgrades[key];
        template += `beats: ${clickUpgrades[key].quantity}`
    }
    document.getElementById('clickingUp').innerText = template
}
drawClickUp()
