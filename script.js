
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();

    const item = document.createElement("li");
    item.textContent =
        `${name} | Roll No: ${roll} | ${email} | ${course}`;

    studentList.appendChild(item);
    studentForm.reset();
});
