let courseTool = document.querySelector("#Courses");
let courseMenu = document.querySelector(".course-menu");
let contactBtn = document.querySelector("#Contact");
let userForm = document.querySelector(".UserForm");

courseTool.addEventListener("click", function () {
  courseMenu.classList.toggle("active");
});

contactBtn.addEventListener("click", function () {
  userForm.classList.toggle("show");
});
