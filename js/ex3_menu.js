// burger menu attempt
// onclick set to false(hide ie display none) or set to true(show ie display block)

// select navigation
let icon = document.querySelector("nav");
let numberOfElements = icon.children.length;
function burger() {
    //let icon = document.querySelector("nav");
    //let numberOfElements = icon.children.length;
    // iterate over the elements
    // hide menu icon if screenSize is greater than 320
    let screenSize = window.outerWidth;

    if(screenSize < 801) {//321
        for (let i = 0; i < numberOfElements; i++) {
            icon.children[0].style.display = "block";
            icon.children[i].style.display = "none";
        }
    } else {

        for (let i = 0; i < numberOfElements; i++) {
            icon.children[0].style.display = "none";
            icon.children[i].style.display = "flex";
        }

    }
    let clicked = false;
    icon.addEventListener("click", clickMenu);
// the click functionality should only work if the screen size is less than screenSize
    function clickMenu() {
        //if clicked, set to true
        clicked = !clicked;
        if(clicked) {

            // iterate over the elements
            for(let i = 0; i < numberOfElements; i++) {
                icon.children[0].style.display = "block";
                icon.children[i].style.display = "block";
            }
            //clicked = false;
        }else {
            for(let i = 0; i < numberOfElements; i++) {
                icon.children[0].style.display = "block";
                icon.children[i].style.display = "none";
            }
        }
    };
}

burger();
//use resize
// when to listen for resize, what to do when resize is called
window.addEventListener("resize", function() {
    let screenSize = window.outerWidth;
    if(screenSize < 801) {
        burger();
    }else {//hide image

        //let hideImage = document.querySelector("nav");
        //let numberOfElements = hideImage.children.length;
        for(let i = 0; i < numberOfElements; i++) {
            icon.children[0].style.display = "none";
            icon.children[i].style.display = "flex";
        }
    }
});


