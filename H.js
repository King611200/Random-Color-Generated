console.log("**************Exercise 12*********************")

// // let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children

// // console.log(boxes)

// function getrandomColor() {
//     let val1 = Math.ceil(0+Math.random()*255);
//     let val2 = Math.ceil(0+Math.random()*255);
//     let val3 = Math.ceil(0+Math.random()*255);
//     return `rgb(${val1},${val2},${val3})`
// }

// Array.from(boxes).forEach(e => {
//     e.style.backgroundColor = getrandomColor()
//     e.style.color = getrandomColor()

// })

var boxes = document.querySelectorAll(".box")
 for(let i =0; i<boxes.length;i++){
    var box = boxes[i];

    //Generate random color (16777215 is white in Decimal)
    var randomColor  = "#"+ Math.floor(Math.random()*16777215).toString(16);

    //Generate random background color 
    var randomBackgroundColor  = "#"+ Math.floor(Math.random()*16777215).toString(16);

    //Assign random color and background 
    box.style.color = randomColor;
    box.style.backgroundColor = randomBackgroundColor;

    // Set content to show color code
    box.textContent = randomColor;
 }