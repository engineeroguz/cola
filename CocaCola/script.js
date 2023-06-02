var typed = new Typed(".text", {
  String: ["Coca Cola"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true
});
function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color) {
    const circle = document.querySelector(".circle")
    circle.style.background = color;
} 