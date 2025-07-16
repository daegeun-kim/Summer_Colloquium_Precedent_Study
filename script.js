const button1 = document.getElementById("mainpage");
if (button1) {
  button1.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

const button2 = document.getElementById("subpage1");
if (button2) {
  button2.addEventListener("click", function () {
    window.location.href = "3layers.html";
  });
}

const button3 = document.getElementById("subpage2");
if (button3) {
  button3.addEventListener("click", function () {
    window.location.href = "final.html";
  });
}