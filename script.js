

/* ============ PART 1: VARIABLES + CONDITIONALS ============ */
// Read age, check simple rule, and show a message.

const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const result1 = document.getElementById("result1");

checkAgeBtn.addEventListener("click", function () {
  const age = Number(ageInput.value); // convert input to number

  if (Number.isNaN(age) || age <= 0) {
    result1.textContent = "Please enter a valid age (number > 0).";
    return;
    }
  // simple conditional
  if (age >= 18) {
    result1.textContent = "Eligible: you meet the minimum age.";
  } else {
    result1.textContent = "Not eligible: you must be 18+.";
  }
});


/* ==================== PART 2: FUNCTIONS ==================== */
// Two custom functions: greet(name) and addNumbers(a, b).

function greet(name) {
  if (!name) return "Hello, Friend!";
  return "Hello, " + name + " — welcome to PLP!";
}

function addNumbers(a, b) {
  return a + b;
}

// Use functions with the page
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const msg = greet(name);
  greetOutput.textContent = msg;
});

const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const sumBtn = document.getElementById("sumBtn");
const sumOutput = document.getElementById("sumOutput");

sumBtn.addEventListener("click", function () {
  const a = Number(numA.value);
  const b = Number(numB.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    sumOutput.textContent = "Please enter two numbers.";
    return;
  }
  const total = addNumbers(a, b);
  sumOutput.textContent = "Sum: " + total;
});


/* ===================== PART 3: LOOPS ======================= */
// Example 1: for-loop, show PLP focus areas in a list.
// Example 2: while-loop , count from 1 to 5.

const areas = [
  "Democratize Tech Education",
  "Bridge the Digital Skills Gap",
  "Youth Employment & Talent",
  "Innovation & Ecosystem"
];

const listFruitsBtn = document.getElementById("listFruitsBtn");
const fruitList = document.getElementById("fruitList");

listFruitsBtn.addEventListener("click", function () {
  fruitList.innerHTML = ""; // clear list

  // basic for-loop
  for (let i = 0; i < areas.length; i++) {
    const li = document.createElement("li");
    li.textContent = areas[i];
    fruitList.appendChild(li);
  }
});

const countBtn = document.getElementById("countBtn");
const countOutput = document.getElementById("countOutput");

countBtn.addEventListener("click", function () {
  let n = 1;
  let text = "";

  // basic while-loop
  while (n <= 5) {
    text += n + " ";
    n++;
  }
  countOutput.textContent = text.trim();
});


/* ============== PART 4: DOM INTERACTIONS (3+) ============== */
// 1) Change text
// 2) Toggle color style
// 3) Add a new item to a list

const domText = document.getElementById("domText");
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

// 1) Change text content
changeTextBtn.addEventListener("click", function () {
  domText.textContent = "PLP supports learners through training, community, and opportunities.";
});

// 2) Toggle CSS class
toggleColorBtn.addEventListener("click", function () {
  domText.classList.toggle("highlight");
});

// 3) Create and append a new item
addItemBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = "New item added at " + new Date().toLocaleTimeString();
  dynamicList.appendChild(li);
});
