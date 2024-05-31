const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const random = Math.floor(Math.random() * images.length);

document.body.style.background = `url(../img/${images[random]}) no-repeat center fixed`;
document.body.style.backgroundSize = "cover";
