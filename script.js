let students = [];

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;

  const student = { name, age, gender, course, email };
  students.push(student);

  displayStudents();
  this.reset(); 
});

function displayStudents() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  students.forEach((stu, index) => {
    const row = `
      <tr>
        <td class="border p-2">${stu.name}</td>
        <td class="border p-2">${stu.age}</td>
        <td class="border p-2">${stu.course}</td>
        <td class="border p-2">${stu.gender}</td>
        <td class="border p-2">${stu.email}</td>
        <td class="border p-2">
          <button onclick="deleteStudent(${index})" class="bg-green-500 hover:bg-black hover:text-white px-2 py-1 rounded">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
