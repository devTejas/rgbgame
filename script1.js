// -2.DARK MODE
// -1.CAUTION  -- YET TO BE DONE
// 0.GAME      -- GAME BY DEFAULT VALUES
// 1.Color all squares
// 2.Pick a color and display it
// 3.Upon a square click, compare it's color with pickColor also display result on bar
// 4.If true, Change display and all squares to same color else remove the square. Change pointer.
// 5.Upon newcolor(level) click, generate newColors
// 6.Work on modes
// 7.Increase transition time

// // -1.CAUTION
// let yesBtn = document.querySelectorAll("#yesBtn");
// let game = document.querySelector(".game");
// let warningBox = document.querySelector(".warning-box");
// let h1Element = document.createElement("h1");
// h1Element.innerHTML = "SORRY! <br/>You can't😞";
// yesBtn[0].addEventListener("click", () => {
//     game.classList.remove("game");
//     warningBox.classList.add("game");
// });
// yesBtn[1].addEventListener("click", () => warningBox.append(h1Element));

// 0.GAME
let darkMode = document.querySelector(".dark-mode");
// let darkH1 = document.querySelector(".dark-h1");
let squares = document.querySelectorAll(".squares");
let sqLength = squares.length;
let colorPicked;
let colorClicked;
let black = "#000";
let h1Display = document.querySelector("#h1-header");
let bar = document.querySelector(".bar");
let level = document.querySelectorAll(".level");
let result = document.querySelector(".result");
let lowBtn = document.querySelector(".low");
let highBtn = document.querySelector(".high");
let speed = 0.5;

// -2.DARK MODE
darkMode.addEventListener("click", () => {
    darkMode.innerHTML === "☀" ? darkMode.innerHTML = "🌙" : darkMode.innerHTML = "☀";
    document.body.classList.toggle("dark");
    bar.classList.toggle("bar");
    black === "#000" ? black = "#fff" : black = "#000";
});

// 1.colorSquare FN
colorSquare = sq => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    sq.style.backgroundColor = 'rgb(' + [r, g, b].join(',') + ')';
}
squares.forEach(colorSquare);
// 2.color pick and disp
colorPicked = squares[Math.floor(Math.random() * sqLength)].style.backgroundColor;
let colorDisplay = document.querySelector("#colorValue");
colorDisplay.innerHTML = colorPicked.slice(3);
// 3.Comparision
squares.forEach(ele => ele.addEventListener("click", () => {
    colorClicked = ele.style.backgroundColor;
    // 4.changeSquareColor function
    changeSquareColor = (box, colorValue = colorClicked, resultValue = "Try Again!") => {
        box.style.backgroundColor = colorValue;
        box.style.transition = `background ` + String(speed) + `s`;
        box.style.cursor = "initial";
        box.style.pointerEvents = "none";
        box.title = "👎";
        result.innerHTML = resultValue;
    }
    if (colorPicked === colorClicked) {
        squares.forEach(sqBox => changeSquareColor(sqBox, colorClicked, "CORRECT"));
        level[0].innerHTML = "PLAY AGAIN?";
        h1Display.style.backgroundColor = colorClicked;
        h1Display.style.transition = "background " + String(speed) + "s";
    }
    else {
        changeSquareColor(ele, black);
    }
}));

// 5.newColors function upon clicking any ".level" element
reset = (mode) => {
    console.log(mode, mode.innerHTML);
}
level.forEach(mode => mode.addEventListener("click", reset));

// 7.Transition time
highBtn.addEventListener("click", () => speed--);
lowBtn.addEventListener("click", () => speed++);
// 8.reload()
// reload = () => {
//     location = "index.html";
// }