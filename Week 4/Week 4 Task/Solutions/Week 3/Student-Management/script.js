let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const courseInput = document.getElementById("course");

const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("studentTable");

const searchInput = document.getElementById("search");
const filter = document.getElementById("filter");

// Display saved students when page loads
displayStudents();

// Event Listeners
addBtn.addEventListener("click", addStudent);
searchInput.addEventListener("input", displayStudents);
filter.addEventListener("change", displayStudents);

// Add or Update Student
function addStudent() {

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const course = courseInput.value.trim();

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    const student = {
        name,
        roll,
        course
    };

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = -1;
        addBtn.textContent = "Add Student";
    }

    localStorage.setItem("students", JSON.stringify(students));

    clearInputs();
    displayStudents();
}

// Display Students
function displayStudents() {

    tableBody.innerHTML = "";

    const search = searchInput.value.toLowerCase();
    const selectedCourse = filter.value;

    students.forEach((student, index) => {

        if (
            student.name.toLowerCase().includes(search) &&
            (selectedCourse === "All" || student.course === selectedCourse)
        ) {

            tableBody.innerHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.roll}</td>
                    <td>${student.course}</td>
                    <td>
                        <button class="edit" onclick="editStudent(${index})">Edit</button>
                        <button class="delete" onclick="deleteStudent(${index})">Delete</button>
                    </td>
                </tr>
            `;
        }
    });
}

// Edit Student
function editStudent(index) {

    nameInput.value = students[index].name;
    rollInput.value = students[index].roll;
    courseInput.value = students[index].course;

    editIndex = index;
    addBtn.textContent = "Update Student";
}

// Delete Student
function deleteStudent(index) {

    if (confirm("Delete this student?")) {

        students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
    }
}

// Clear Input Fields
function clearInputs() {

    nameInput.value = "";
    rollInput.value = "";
    courseInput.value = "";
}