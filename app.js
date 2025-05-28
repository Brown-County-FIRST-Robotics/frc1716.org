// Redbird Robotics JS


let timer;
let l = false;
let r = false;
let f = false;
let b = false;
let left1 = 130;
let top1 = 204;
let x_pos;
let y_pos;

window.onload = function () {
    if (window.location.pathname.endsWith('FinalSimulator.html')) {//only run on special page
        const body = document.querySelector("body");
        if (body) {
            body.addEventListener("keydown", start);
            body.addEventListener("keyup", stop);

            timer = setInterval(moover, 5);
        }
        const ranspot = document.getElementById("stuff");
        ranspot.addEventListener("click", stuff);

        window.addEventListener("keydown", function (event) {

            const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
            if (arrowKeys.includes(event.key)) {
                event.preventDefault();
            }
        }, {passive: false});//I did find this on the internet, it makes it so the arrow keys don't scroll on the webpage

    }

    function start(varName) {
        if (varName.key === "ArrowRight") {
            r = true;
            console.log("R is now 1");
        }
        if (varName.key === "ArrowLeft") {
            move = "left";
            l = true;
        }
        if (varName.key === "ArrowUp") {
            f = true;
        }
        if (varName.key === "ArrowDown") {
            b = true;
        }
    }

    function stop(varName) {
        if (varName.key === "ArrowRight") {
            r = false;
            console.log("R is now 0");
        }
        if (varName.key === "ArrowLeft") {
            move = "left";
            l = false;
        }
        if (varName.key === "ArrowUp") {
            f = false;
        }
        if (varName.key === "ArrowDown") {
            b = false;
        }
    }


    function moover() {
        const viewportWidth = window.innerWidth;
        const sillyDiv = document.getElementById("robot");
        let div = window.getComputedStyle(sillyDiv);
        if (f === true && top1 >= 205) {
            top1 = top1 - 1;
        }
        if (b === true && top1 <= 827) {
            top1 = top1 + 1;
        }
        if (r === true) {
            if ((viewportWidth - (left1 + 75)) >= 36) {
                left1 = left1 + 1;
            }
        }
        if (l === true && left1 >= 131) {
            left1 = left1 - 1;
        }

        console.log(left1);
        console.log(top1);
        sillyDiv.style.left = `${left1}px`;
        sillyDiv.style.top = `${top1}px`;
    }


    let x = 1;

    function stuff() {
        let ran = Math.floor(Math.random() * 255);
        const rand_box = document.getElementById("ran_place");
        const cool_row = document.querySelectorAll("tr")[1];
        const table = document.querySelector("table");
        const main = document.querySelector("main");
        const rep = document.querySelector("#replace");
        const bad_row = document.querySelectorAll("tr")[4];
        cool_row.setAttribute("id", "cool_row");
        rand_box.innerHTML = ran;
        if (bad_row) {
            bad_row.remove();
        }
        const new_thing = document.createElement("h1");
        new_thing.textContent = "another new thing";
        const new_thing2 = document.createElement("h1");
        new_thing2.textContent = "last new thing";
        const new_thing3 = document.createElement("h1");
        new_thing3.textContent = "a new thing";

        if (x === 1) {//only works once
            main.insertBefore(new_thing, table);
            main.appendChild(new_thing2);
            rep.replaceWith(new_thing3);
            let value = prompt("enter a number");
            console.log(value);
            if (value === "69") {
                alert(`Nice`);
            } else if (value === null || value === "") {
                alert(`Aww man you didnt do it :(`);
            } else {
                alert(`${value} is a cool number`);
            }
        }
        x = 2;

    }

} 