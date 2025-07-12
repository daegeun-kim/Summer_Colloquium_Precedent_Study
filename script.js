const subpageBtn = document.getElementById("mainpage");
if (subpageBtn) {
  subpageBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

// For navigating from subpage.html to index.html
const indexBtn = document.getElementById("subpage1");
if (indexBtn) {
  indexBtn.addEventListener("click", function () {
    window.location.href = "3layers.html";
  });
}