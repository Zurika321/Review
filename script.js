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

//loading hết nội dung
window.onload = function () {
  const $percent = document.querySelector(".count .percent");
  const $circle = document.querySelector(".circle");
  var main = document.getElementById("main");
  var progressBar = document.getElementById("loading-progress");

  var interval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(interval);
      setTimeout(function () {
        progressBar.style.display = "none";
        main.style.display = "block";
        btnINFORMATION.click();
        btnINFORMATION.focus();
        vitrikhunganh();
      }, 500);
    }
    var progress =
      ((document.documentElement.scrollTop + window.innerHeight) /
        document.documentElement.scrollHeight) *
      100;
    $percent.innerHTML = progress;
    $circle.style.background = `conic-gradient(from 0deg at 50% 50%, #6f7bf7 0%, #9bf8f4 ${progress}%, #101012 ${progress}%)`;
  }, 100);
};
