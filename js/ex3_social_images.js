// the id is social_images instead of textBox
textBox();
function textBox() {
    //select box
    let box = document.getElementById("social_images");
    //box.style.borderColor = "red";
    let boxChildren = box.children;
    let slideLength = boxChildren.length;

    //select dots
    let threeDots = document.getElementById("threeDots");
    //threeDots.style.borderColor = "yellow";
    threeDotsChildren = threeDots.children;

    for(let i = 0; i < slideLength; i++) {
        boxChildren[i].style.display = "none";
    }

    let slideCounter = 0;
    let timeOut;
    let mouseOverTimeOut;
    let text;

    setInterval(function () {
        setTimeout(function () {
            // display the current image of the slide
            boxChildren[slideCounter].style.display = "block";
            threeDotsChildren[slideCounter].style.color = "green";

            //hide the rest of the images
            let j = 0;
            for(let i=0; i < slideLength; i++) {
                if(j !== slideCounter) {
                    boxChildren[j].style.display = "none";
                    threeDotsChildren[j].style.color = "grey";
                }
                j++;
            }
        }, 100);
        slideCounter++; //next slide to be displayed
        //reset slideCounter
        if(slideCounter === slideLength) {
            slideCounter = 0;
        }
    }, 4000);
}