//Giữ khung ảnh đúng vị trí
window.addEventListener("resize", function () {
  vitrikhunganh();
});
const content = document.getElementById("content");
var khunganh = document.getElementById("Khung_anh");
function vitrikhunganh() {
  var windowWidth = window.innerWidth;
  var widthkhunganh = khunganh.offsetWidth;
  var Topcontent = content.offsetTop;
  var Heightkhunganh = khunganh.offsetHeight;
  khunganh.style.top = Topcontent - Heightkhunganh / 2 + "px";
  khunganh.style.left = (windowWidth - widthkhunganh) / 2 + "px";
}

// Giữ focus cho navbutton
var allElements = document.querySelectorAll("*");
allElements.forEach(function (element) {
  element.addEventListener("mousedown", function (event) {
    if (!event.target.closest(".navbutton")) {
      event.preventDefault();
    }
  });
});

//chuyển trang
var INFORMATION = document.getElementById("INFORMATION");
var GAME = document.getElementById("GAME");
var PROJECT = document.getElementById("PROJECT");
var trang = [INFORMATION, GAME, PROJECT];
function openTrang(num) {
  for (let i = 0; i < trang.length; i++) {
    if (i == num) {
      trang[num].style.display = "block";
      if (num != 0) {
        khunganh.style.display = "none";
      } else {
        khunganh.style.display = "block";
      }
    } else {
      trang[i].style.display = "none";
    }
  }
  vitrikhunganh();
}

//copy noidung
function copyText(noidung, sttbtn) {
  // Ghi nội dung vào clipboard
  navigator.clipboard
    .writeText(noidung)
    .then(function () {
      document.getElementById(sttbtn).innerHTML = "Copied";
      setTimeout(function () {
        document.getElementById(sttbtn).innerHTML = "Copy";
      }, 3000);
    })
    .catch(function (err) {
      document.getElementById(sttbtn).innerHTML = "Error";
      setTimeout(function () {
        document.getElementById(sttbtn).innerHTML = "Copy";
      }, 3000);
    });
}

// click icon
function icon() {
  alert("mìk làm icon cho đẹp chứ ko muốn lộ thông tin quá nhiều :))");
}
// mới vô
window.onload = function () {
  document.getElementById("btnINFORMATION").click();
  document.getElementById("btnINFORMATION").focus();
};
vitrikhunganh();
