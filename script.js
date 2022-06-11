const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

function btnOne() {
    if (btn1.classList.contains("circle")) {
        btn1.setAttribute("class", "orange");
    } else if (btn1.classList.contains("orange")) {
        btn1.setAttribute("class", "circle")
    }
    btn2.setAttribute("class", "circle");
    btn3.setAttribute("class", "circle");
    btn4.setAttribute("class", "circle");
    btn5.setAttribute("class", "circle");
}
function btnTwo() {
    if (btn2.classList.contains("circle")) {
        btn2.setAttribute("class", "orange");
    } else if (btn2.classList.contains("orange")) {
        btn2.setAttribute("class", "circle")
    }
    btn1.setAttribute("class", "circle");
    btn3.setAttribute("class", "circle");
    btn4.setAttribute("class", "circle");
    btn5.setAttribute("class", "circle");
}
function btnThree() {
    if (btn3.classList.contains("circle")) {
        btn3.setAttribute("class", "orange");
    } else if (btn3.classList.contains("orange")) {
        btn3.setAttribute("class", "circle")
    }
    btn1.setAttribute("class", "circle");
    btn2.setAttribute("class", "circle");
    btn4.setAttribute("class", "circle");
    btn5.setAttribute("class", "circle");
}
function btnFour() {
    if (btn4.classList.contains("circle")) {
        btn4.setAttribute("class", "orange");
    } else if (btn4.classList.contains("orange")) {
        btn4.setAttribute("class", "circle")
    }
    btn1.setAttribute("class", "circle");
    btn2.setAttribute("class", "circle");
    btn3.setAttribute("class", "circle");
    btn5.setAttribute("class", "circle");
}
function btnFive() {
    if (btn5.classList.contains("circle")) {
        btn5.setAttribute("class", "orange");
    } else if (btn5.classList.contains("orange")) {
        btn5.setAttribute("class", "circle")
    }
    btn1.setAttribute("class", "circle");
    btn2.setAttribute("class", "circle");
    btn3.setAttribute("class", "circle");
    btn4.setAttribute("class", "circle");
}


