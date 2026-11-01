// ---------- Select elements ----------
const countEl = document.querySelector("#count");
const form = document.querySelector("#studentForm");
const formMsg = document.querySelector("#formMsg");
const searchInput = document.querySelector("#searchInput");
const filterSelect = document.querySelector("#filterSelect");
const studentList = document.querySelector("#studentList");
const statsEl = document.querySelector("#stats");
const loadBtn = document.querySelector("#loadBtn");
const apiStatus = document.querySelector("#apiStatus");
const userList = document.querySelector("#userList");

// ---------- 1. Button click events ----------
let count = 0;
const showCount = () => (countEl.textContent = count);

document.querySelector("#incBtn").addEventListener("click", () => { count++; showCount(); });
document.querySelector("#decBtn").addEventListener("click", () => { count--; showCount(); });
document.querySelector("#resetBtn").addEventListener("click", () => { count = 0; showCount(); });

document.querySelector("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ---------- 2. Data and form submission ----------
let students = [
  { id: 1, name: "Amit Sharma", course: "CSE", marks: 85 },
  { id: 2, name: "Neha Patil", course: "IT", marks: 92 },
  { id: 3, name: "Rahul Deshmukh", course: "CSE", marks: 35 },
  { id: 4, name: "Sneha Kale", course: "IT", marks: 88 }
];
let nextId = 5;

form.addEventListener("submit", (event) => {
  event.preventDefault();                       // stop page reload

  const name = document.querySelector("#nameInput").value.trim();
  const course = document.querySelector("#courseInput").value.trim();
  const marks = Number(document.querySelector("#marksInput").value);

  if (!name || !course || Number.isNaN(marks) || marks < 0 || marks > 100) {
    formMsg.textContent = "Please enter valid details.";
    formMsg.className = "msg error";
    return;
  }

  students = [...students, { id: nextId++, name, course, marks }];   // spread
  formMsg.textContent = `${name} added successfully.`;
  formMsg.className = "msg success";
  form.reset();
  render();
});

// ---------- 3. Display, search, filter ----------
function render() {
  const term = searchInput.value.trim().toLowerCase();
  const status = filterSelect.value;

  const visible = students
    .filter(({ name, course }) =>
      name.toLowerCase().includes(term) || course.toLowerCase().includes(term))
    .filter(({ marks }) =>
      status === "all" || (status === "pass" ? marks >= 40 : marks < 40));

  studentList.replaceChildren();                // clear the list

  if (visible.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No students found.";
    studentList.appendChild(li);
  }

  visible.forEach(({ id, name, course, marks }) => {
    const li = document.createElement("li");
    if (marks < 40) li.classList.add("fail");

    const info = document.createElement("span");
    info.textContent = `${name} (${course}) - ${marks} marks`;   // textContent is safe

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete";
    del.dataset.id = id;

    li.append(info, del);
    studentList.appendChild(li);
  });

  // reduce: average of the visible students
  const total = visible.reduce((sum, s) => sum + s.marks, 0);
  const average = visible.length ? (total / visible.length).toFixed(1) : 0;
  statsEl.textContent = `Showing ${visible.length} of ${students.length} | Average: ${average}`;
}

// Event delegation: one listener handles every Delete button
studentList.addEventListener("click", (event) => {
  if (event.target.matches(".delete")) {
    const id = Number(event.target.dataset.id);
    students = students.filter((s) => s.id !== id);
    render();
  }
});

searchInput.addEventListener("input", render);
filterSelect.addEventListener("change", render);
render();

// ---------- 4. Fetch API with async/await ----------
async function loadUsers() {
  apiStatus.textContent = "Loading...";
  apiStatus.className = "msg";
  userList.replaceChildren();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const users = await response.json();

    users.slice(0, 5).forEach(({ name, email, company: { name: companyName } }) => {
      const li = document.createElement("li");
      li.textContent = `${name} | ${email} | ${companyName}`;
      userList.appendChild(li);
    });

    apiStatus.textContent = `Loaded ${Math.min(users.length, 5)} users.`;
    apiStatus.className = "msg success";
  } catch (error) {
    apiStatus.textContent = `Could not load data: ${error.message}`;
    apiStatus.className = "msg error";
  }
}

loadBtn.addEventListener("click", loadUsers);