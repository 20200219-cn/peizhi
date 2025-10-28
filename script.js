// script.js
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].classList.add("active");
    coll[i].nextElementSibling.style.display = "block";
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }


// Optional JS to dynamically change banner content or adjust speed
document.querySelector('.banner-content').textContent = '欢迎来到我的个人主页!';