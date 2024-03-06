let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
let refreshInterval;

nextButton.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prevButton.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {nextButton.click()}, 3000);
    
    // Reset animation by setting opacity to 0 and then to 1
    let textElements = document.querySelectorAll('.slider .list .item .text');
    textElements.forEach(text => {
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.opacity = '1';
        }, 10); // This delay allows the browser to reset the animation
    });
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};

nextButton.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    rotateText(nextButton); // Rotate the text for the next button
    reloadSlider();
}

prevButton.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    rotateText(prevButton); // Rotate the text for the previous button
    reloadSlider();
}

function rotateText(button) {
    let buttonText = button.querySelector('span');
    buttonText.classList.toggle('rotated');
}

rotateText(nextButton); // Initial rotation for the next button
rotateText(prevButton); // Initial rotation for the previous button

document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loaderText');

    let percentage = 0;
    const interval = setInterval(() => {
        percentage++;
        loader.style.borderTopColor = `hsl(${percentage * 3.6}, 100%, 50%)`; // Change color based on percentage
        loaderText.innerText = `${percentage}%`;

        if (percentage >= 100) {
            clearInterval(interval);
            loader.style.borderTopColor = '#2ecc71'; // Set final color
            loaderText.innerText = '100%';
         setTimeout(()=>{
            if(percentage === 100){
                const loaderc = document.querySelector(".loader-container")
                loaderc.style.display="none";
                loaderc.classList.add("hogyatera")
            }
         },1000)
        }
    }, 50);
});
