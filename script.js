let images = [
    './assets/2.webp',
    './assets/3.webp',
    './assets/4.webp',
    './assets/5.webp',
    './assets/6.webp',
    './assets/7.webp', 
    './assets/8.webp',
    './assets/9.webp',
    './assets/10.webp'
];
document.querySelector(".generate_random_image_btn").addEventListener(
    "click",
    ()=> document.getElementById("random_image_container").src = images[Math.floor(Math.random()*images.length)]);