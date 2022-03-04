let pixels = document.querySelectorAll('.pixel');
let color = document.querySelector('.chosen-color');
let lastik = document.querySelector('.eraser');

for (let pixel of pixels) {
    pixel.onclick = function () {
        if (lastik.checked === false) {
            pixel.style.backgroundColor = color.value;
        } else {
            pixel.style.backgroundColor = 'white';
        }
    }
}