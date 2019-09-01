const btn = document.querySelectorAll(".btnYellow")
const input = document.querySelector(".input")
const display = document.querySelector(".display")
const btnEqual = document.querySelector(".btn.btnEqual")
const btnClear = document.querySelector(".btnClear")
const btnSqrt = document.querySelector(".btnSqrt")
const btnPow = document.querySelector(".btnPow")
const backspace = document.querySelector(".backspace")

const op = document.getElementsByClassName("s")[1]
let t = op.getAttribute("data")
console.log(t)
// t.addEventListener("input", function () {
//     let result = eval(input.value)
//     display.value = Math.round(result * 1000000) / 1000000
//     console.log(6)
// })

// op.forEach(o => {
//     o.addEventListener("input", function () {
//         let result = eval(input.value)
//         display.value = Math.round(result * 1000000) / 1000000
//         console.log(6)
//     })
// })

btn.forEach(b => {
    b.addEventListener("click", function () {
        let btnText = b.getAttribute("data")
        input.value += btnText
        animateInput()
    })
})

op.addEventListener("keyup", e => {
    console.log(e.target.attributes.data.value)
    if (e.target.attributes.data.value == "+") {
        let result = eval(input.value)
        display.value = Math.round(result * 1000000) / 1000000
        console.log(6)
    }
})

input.addEventListener("input", function () {
    let result = eval(input.value)
    display.value = Math.round(result * 1000000) / 1000000
    console.log()


})

btnEqual.addEventListener("click", function () {

    if (input.value == "" || input.value == "*" || input.value == "/" || input.value == "+" || input.value == "-" || input.value == ".") {
        input.value = "Not Valid"
    } else {
        let result = eval(input.value);
        console.log(input.value);
        /*
        if(result > 0) {
        input.style.color = "green"
        input.style.border = "1px solid green"
        } else if(result < 0) {
        input.style.color = "red"
        input.style.border = "1px solid red"
        } else if (result == 0) {
        input.style.color = "grey"
        input.style.border = "1px solid grey"
        }
        */
        display.value = Math.round(result * 1000000) / 1000000;
        // input.value = ""
    }
    animateInput()
});

btnClear.addEventListener("click", function () {
    display.value = ""
    input.value = ""
    /*
    input.style.color = "grey"
    input.style.border = "1px solid grey"
    */
    animateInput()
})

btnSqrt.addEventListener("click", function () {
    if (input.value == "") {
        input.value = ""
    } else {
        let value = Math.sqrt(input.value)
        display.value = Math.round(value * 1000000) / 1000000
    }
    // input.value = ""
    animateInput()
})

btnPow.addEventListener("click", function () {
    if (input.value == "") {
        input.value = ""
    } else {
        var value = Math.pow(input.value, 2)
        display.value = Math.round(value * 1000000) / 1000000
    }
    // input.value = ""
    animateInput()
})

backspace.addEventListener("click", function () {
    let value = input.value
    let valueLength = value.length - 1
    let newValue = value.substring(0, valueLength)
    input.value = newValue
    // display.value = newValue


    /*
    input.style.color = "grey"
    input.style.border = "1px solid grey"
    */
    animateInput()
})

function animateInput() {
    input.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 1000, fill: "forwards" })
    display.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, fill: "forwards" })

}

function ans(a) {
    console.log(a.length)
}

// document.querySelector(".i").addEventListener("keyup", e => {

//     console.log(e.keyCode)
// })
