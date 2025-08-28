function showStudent() {
    let name = document.getElementById("stuName").value;
    let age = document.getElementById("stuAge").value;
    let course = document.getElementById("stuCourse").value;

    // ✅ Using template literals
    let message = `Hello, my name is ${name}. I am ${age} years old and I am studying ${course}.`;

    document.getElementById("output").innerHTML = message;
}
