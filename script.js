window.addEventListener("resize", function () {
  vitrikhunganh();
});
function vitrikhunganh() {
  const content = document.getElementById("content");
  var khunganh = document.getElementById("Khung_anh");
  var windowWidth = window.innerWidth;
  var widthkhunganh = khunganh.offsetWidth;
  var Topcontent = content.offsetTop;
  var Heightkhunganh = khunganh.offsetHeight;
  khunganh.style.top = Topcontent - Heightkhunganh / 2 + "px";
  khunganh.style.left = (windowWidth - widthkhunganh) / 2 + "px";
}
vitrikhunganh();

// Giữ focus cho navbutton
var allElements = document.querySelectorAll("*");
allElements.forEach(function (element) {
  element.addEventListener("mousedown", function (event) {
    if (!event.target.closest(".navbutton")) {
      event.preventDefault();
    }
  });
});
