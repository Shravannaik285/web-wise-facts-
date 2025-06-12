
  let isDark = false;

  function activateDarkMode() {
    document.body.style.backgroundImage = "url('182428240217.jpg')";
    document.body.style.color = "white";
    isDark = true;
  }

  function activateLightMode() {
    document.body.style.backgroundImage = "url('light.jpg')";
    document.body.style.color = "black";
    isDark = false;
  }

  function toggleDarkMode() {
    if (!isDark) {
      activateDarkMode();
    }
  }

  function toggleLightMode() {
    if (isDark) {
      activateLightMode();
    }
  }

  // Optional: Set a default mode on load (e.g., light)
  window.onload = function () {
    activateLightMode();
  };

  //for changing the facts in html
  const facts = [
  "💡 Did you know? JavaScript was created in just 10 days!",
  "🌐 The first website went live in 1991.",
  "⚙️ CSS stands for Cascading Style Sheets.",
  "🧱 HTML was first proposed in 1990 by Tim Berners-Lee.",
  "🚀 The first version of React was released by Facebook in 2013.",
  "💾 The original floppy disk was 8 inches wide!",
  "🖥️ The first computer bug was an actual moth found in a computer."
];

let currentFactIndex=0;
let isFactVisible = false;

function showTab(){
  const factBox=document.getElementById("fun-fact");
  const factBtn=document.getElementById("fact-btn");
  
  if(!isFactVisible){
    factBox.style.display="block";
    factBtn.style.display="block";
    factBox.textContent=facts[currentFactIndex];
    isFactVisible = true;
  }else{
    factBox.style.display="none";
    factBtn.style.display="none";
    isFactVisible=false;
  }
}
function nextFact(){
  currentFactIndex=(currentFactIndex+1)%facts.length;
  document.getElementById("fun-fact").textContent=facts[currentFactIndex];

}
//for css
const cssFacts = [
  "🎨 CSS was introduced in 1996 to separate content from design.",
  "🌀 You can animate elements using only CSS (no JavaScript needed).",
  "💡 CSS stands for Cascading Style Sheets.",
  "🧱 CSS Grid and Flexbox revolutionized layout design.",
  "🔁 CSS variables (custom properties) make reusable styles easy.",
  "📐 Media queries in CSS allow responsive design for all screen sizes."
];

let cssFactIndex = 0;
let iscssVisible = false;

function showCSSFacts() {
  const factBox = document.getElementById("css-fact");
  const factBtn = document.getElementById("css-fact-btn");

  if (!iscssVisible) {
    factBox.style.display = "block";
    factBtn.style.display = "block";
    factBox.textContent = cssFacts[cssFactIndex];
    iscssVisible = true;
  } else {
    factBox.style.display = "none";
    factBtn.style.display = "none";
    iscssVisible = false;
  }
}

function nextCSSFact() {
  cssFactIndex = (cssFactIndex + 1) % cssFacts.length;
  document.getElementById("css-fact").textContent = cssFacts[cssFactIndex];
}

//for js
const jsFacts=[
  "💻 JavaScript was created by Brendan Eich in 1995.",
  "🌍 JavaScript is the most popular programming language in the world.",
  "🚀 Node.js allows JavaScript to run on the server side.",
  "📚 ECMAScript is the standard that JavaScript follows.",
  "🔄 JavaScript supports functional programming, object-oriented programming, and imperative programming styles.",
  "🧩 JavaScript can manipulate HTML and CSS to create dynamic web pages."
];

let jsFactIndex=0;
let isjsVisible=false;

function showJSFacts() {
  const factBox=document.getElementById("js-fact");
  const factBtn=document.getElementById("js-btn");
  if(!isjsVisible){
    factBox.style.display="block";
    factBtn.style.display="block";
    factBox.textContent=jsFacts[jsFactIndex];
    isjsVisible=true;
  }else{
    factBox.style.display="none";
    factBtn.style.display="none";
    isjsVisible=false;
  }
}
function nextJSFact(){
  jsFactIndex=(jsFactIndex+1)%jsFacts.length;
  document.getElementById("js-fact").textContent=jsFacts[jsFactIndex];
}
window.onload = function () {
  activateLightMode(); // Set default mode

  // Hide both fact sections
  document.getElementById("fun-fact").style.display = "none";
  document.getElementById("fact-btn").style.display = "none";
  document.getElementById("css-fact").style.display = "none";
  document.getElementById("css-fact-btn").style.display = "none";
  document.getElementById("js-fact").style.display="none";
  document.getElementById("js-btn").style.display="none";
}


