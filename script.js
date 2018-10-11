var index = 0;

var images = document.querySelectorAll(".container img");

setInterval(changeImg, 3000);

function changeImg() {
    images[index].classList.remove("show");

    index += 1;
    if(index >= images.length) {
        index = 0;
    }

    images[index].classList.add("show");
}



