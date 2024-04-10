const searchicon1 = document.querySelector("#searchicon1");
const srchicon1 = document.querySelector("#srchicon1");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click", function () {
  search1.style.display = "flex";
  searchicon1.style.display = "none";
});

const searchicon2 = document.querySelector("#searchicon2");
const srchicon2 = document.querySelector("#srchicon2");
const search2 = document.querySelector("#searchinput2");

searchicon2.addEventListener("click", function () {
  search2.style.display = "flex";
  searchicon2.style.display = "none";
});

const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#hdcross");
const header_bar = document.querySelector(".header_bar");

bar.addEventListener("click", function () {
  setTimeout(() => {
    cross.style.display = "block";
  }, 200);
  header_bar.style.right = "0%";
});

cross.addEventListener("click", function () {
  cross.style.display = "none";
  header_bar.style.right = "-100%";
});

var btn = document.getElementById("login1");
var btn1 = document.getElementById("login2");

var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("myModal");
btn.onclick = function () {
  modal.style.display = "block";
};

btn1.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById('mapButton').addEventListener('click', function() {
  window.open('https://www.google.com/maps/place/UQO+-+Université+du+Québec+en+Outaouais+-+Pavillon+Lucien-Brault/@45.4286133,-75.7405922,17.8z/data=!3m1!5s0x4cce0480adef1e87:0x77777d6267b96f12!4m6!3m5!1s0x4cce047b7f5995cb:0xdcbc5e06a4e467a5!8m2!3d45.42878!4d-75.7377935!16s%2Fg%2F1ptw5_ggr?entry=ttu', '_blank');
});





