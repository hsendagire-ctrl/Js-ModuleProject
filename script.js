// Variable Definitions
var finalbox = document.getElementById("finalinput");
var baseprice = document.getElementById("basecost");
var province = document.getElementById("gst");
var usercost = document.getElementById("basecost");
let proccessBtn = document.getElementById("btn");
let modeBtn = document.getElementById("modeswitch");
let page = document.getElementById("body");
let lastsentence = document.getElementById("costparagraph");
let table = document.getElementById("tableofprov");
let thirdsentence = document.getElementById("explain");
var introduction = document.getElementById("intro");
var lightswitch = document.getElementById("lightmode");
var provinceValue;

// let priceinput = usercost.value;
// let taxinput = province.value;

// Event Listeners

province.addEventListener("change", savep);
usercost.addEventListener("change", savecost);
proccessBtn.addEventListener("click", calculate);
modeBtn.addEventListener("click", darkmode);
lightswitch.addEventListener("click", lightup);

// Functions
function savecost() {
  let b2 = usercost.value;
}

function savep() {
  let b1 = province.value;
}

function calculate() {
  if (province.value == "Alberta") {
    provinceValue = (Number(usercost.value) * 105) / 100;
  } else if (
    province.value == "British Columbia" ||
    province.value == "Manitoba"
  ) {
    provinceValue = (Number(usercost.value) * 112) / 100;
  } else if (province.value == "Northwest Territories") {
    provinceValue = (Number(usercost.value) * 105) / 100;
  } else if (
    province.value == "New Brunswick" ||
    province.value == "Newfoundland" ||
    province.value == "Nova Scotia" ||
    province.value == "Prince Edward Island"
  ) {
    provinceValue = (Number(usercost.value) * 115) / 100;
  } else if (province.value == "Quebec") {
    provinceValue = (Number(usercost.value) * 114.98) / 100;
  } else if (province.value == "Ontario") {
    provinceValue = (Number(usercost.value) * 113) / 100;
  } else if (province.value == "Yukon") {
    provinceValue = (Number(usercost.value) * 105) / 100;
  } else if (province.value == "Saskatchewan") {
    provinceValue = (Number(usercost.value) * 110) / 100;
  }
  finalbox.value = provinceValue;
}

function darkmode() {
  modeBtn.style.color = "white";
  modeBtn.style.background = "darkslateblue";
  lightswitch.style.color = "white";
  lightswitch.style.background = "darkslateblue";
  proccessBtn.style.color = "white";
  proccessBtn.style.background = "darkslateblue";
  page.style.background = "darkslateblue";
  lastsentence.style.color = "white";
  table.style.color = "white";
  thirdsentence.style.color = "white";
  introduction.style.color = "white";
}

function lightup() {
  modeBtn.style.color = "black";
  modeBtn.style.background = "greenyellow";
  lightswitch.style.color = "black";
  lightswitch.style.background = "greenyellow";
  proccessBtn.style.color = "black";
  proccessBtn.style.background = "greenyellow";
  page.style.background = "rgb(255, 255, 255, 0.7)";
  lastsentence.style.color = "black";
  table.style.color = "black";
  thirdsentence.style.color = "black";
  introduction.style.color = "black";
}
