document.querySelector("body").style.backgroundColor = "#3e3e3e";

let week = prompt("Ko'rmoqchi bo'lgan hafta raqamingizni kiriting");

if (week == 1) {
    alert("Dushanba");
}
else if (week == 2) {
    alert("Seshanba");
}
else if (week == 3) {
    alert("Chorshanba");
}
else if (week == 4) {
    alert("Payshanba");
}
else if (week == 5) {
    alert("Juma");
}
else if (week == 6) {
    alert("Shanba");
}
else if (week == 7) {
    alert("Yakshanba");
}
else {
    alert("Bunday hafta kuni yo'q")
}