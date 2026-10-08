// ==========================================
// 50CC TOOLS — SCRIPT COMPLET
// ==========================================


// ==========================================
// 1. VITESSE THÉORIQUE
// ==========================================

const rpm = document.getElementById("rpm");
const wheel = document.getElementById("wheel");
const front = document.getElementById("front");
const rear = document.getElementById("rear");
const primary = document.getElementById("primary");
const secondary = document.getElementById("secondary");

const speed = document.getElementById("speed");
const totalRatio = document.getElementById("totalRatio");

function calculateSpeed() {

    const r = Number(rpm.value);
    const w = Number(wheel.value);
    const f = Number(front.value);
    const re = Number(rear.value);
    const p = Number(primary.value);
    const s = Number(secondary.value);

    if (!r || !w || !f || !re || !p || !s) {
        speed.textContent = "0";
        totalRatio.textContent = "0";
        return;
    }

    const transmissionRatio = p * s * (re / f);

    const wheelCircumference = w * 0.0254 * Math.PI;

    const wheelRPM = r / transmissionRatio;

    const kmh =
        (wheelRPM * wheelCircumference * 60) / 1000;

    speed.textContent = kmh.toFixed(1);
    totalRatio.textContent = transmissionRatio.toFixed(2);
}

[rpm, wheel, front, rear, primary, secondary].forEach(input => {

    if (input) {
        input.addEventListener("input", calculateSpeed);
    }

});

calculateSpeed();


// ==========================================
// 2. CYLINDRÉE
// ==========================================

const bore = document.getElementById("bore");
const stroke = document.getElementById("stroke");
const cc = document.getElementById("cc");

function calculateCC() {

    const b = Number(bore.value);
    const s = Number(stroke.value);

    if (!b || !s) {
        cc.textContent = "0";
        return;
    }

    const volume =
        (Math.PI / 4) * b * b * s / 1000;

    cc.textContent = volume.toFixed(1);
}

if (bore) {
    bore.addEventListener("input", calculateCC);
}

if (stroke) {
    stroke.addEventListener("input", calculateCC);
}

calculateCC();


// ==========================================
// 3. PIGNON / COURONNE
// ==========================================

const gearFront = document.getElementById("gearFront");
const gearRear = document.getElementById("gearRear");

const finalRatio = document.getElementById("finalRatio");
const transmissionText =
    document.getElementById("transmissionText");

function calculateTransmission() {

    const f = Number(gearFront.value);
    const r = Number(gearRear.value);

    if (!f || !r) {
        finalRatio.textContent = "0";

        if (transmissionText) {
            transmissionText.textContent = "";
        }

        return;
    }

    const ratio = r / f;

    finalRatio.textContent = ratio.toFixed(2);

    if (transmissionText) {
        transmissionText.textContent =
            `Rapport ${ratio.toFixed(2)}:1 — environ ${ratio.toFixed(2)} tours de pignon pour 1 tour de roue.`;
    }
}

if (gearFront) {
    gearFront.addEventListener("input", calculateTransmission);
}

if (gearRear) {
    gearRear.addEventListener("input", calculateTransmission);
}

calculateTransmission();


// ==========================================
// 4. CV → kW
// ==========================================

const cv = document.getElementById("cv");
const kw = document.getElementById("kw");

function calculateKW() {

    const horsepower = Number(cv.value);

    if (!horsepower) {
        kw.textContent = "0";
        return;
    }

    const result = horsepower * 0.73549875;

    kw.textContent = result.toFixed(2);
}

if (cv) {
    cv.addEventListener("input", calculateKW);
}

calculateKW();


// ==========================================
// 5. CONSOMMATION 50CC
// ==========================================

const fuelUsed = document.getElementById("fuelUsed");
const distance = document.getElementById("distance");
const consumption = document.getElementById("consumption");

function calculateConsumption() {

    const fuel = Number(fuelUsed.value);
    const km = Number(distance.value);

    if (!fuel || !km || km <= 0) {

        consumption.textContent = "0";

        return;
    }

    const result = (fuel / km) * 100;

    consumption.textContent = result.toFixed(1);
}

if (fuelUsed) {
    fuelUsed.addEventListener("input", calculateConsumption);
}

if (distance) {
    distance.addEventListener("input", calculateConsumption);
}

calculateConsumption();