// header Navigation

const bars = document.getElementById(`bars`);
let header_ul = document.getElementById(`header-ul`);
const second = document.querySelector(`#bars2`)
console.log(second)


bars.addEventListener(`click`, function () {
  if (header_ul.style.display = `none`) {
    header_ul.style.display = `flex`;
  }
  else {
    header_ul.style.display = `none`
  }

})

// Propertes-animaion

let properts_boxs = document.getElementById(`properts`);
let properts_box_1 = document.getElementById(`info-box-1`);
let properts_box_2 = document.getElementById(`info-box-2`);
let properts_box_3 = document.getElementById(`info-box-3`);
let properts_box_4 = document.getElementById(`info-box-4`);

window.onscroll = function properts_animation() {
  properts_boxs.className = `container`;
  properts_boxs.style.display = `grid`;
  properts_box_1.className = `info-box info-box-1`;
  properts_box_2.className = `info-box info-box-2`;
  properts_box_3.className = `info-box info-box-3`;
  properts_box_4.className = `info-box info-box-4`;
};

// Form

const form = document.forms[0];
const user_name = document.querySelector(`[name= "user_name"]`);
const user_email = document.querySelector(`[name = "user_email"]`);
const user_number = document.querySelector(`[name ="user_number"]`);
const select = document.querySelector(`[name = "select"]`);
const male = document.querySelector(`[name = "male"]`);
const female = document.querySelector(`[name = "female"]`);
form.onsubmit = function (event) {
  if (
    user_name.value === "" ||
    user_email.value === "" ||
    user_number.value === "" ||
    select.value === "select the course --"
  ) {
    event.preventDefault();
  }
  if (user_name.value.length > 15 || user_name.value.length < 5) {
    event.preventDefault();
  }
  if (user_number.value.length < 11) {
    event.preventDefault();
  }
};


// End Project