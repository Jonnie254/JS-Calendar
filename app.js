window.onload = function () {
  generateCalendar();
};
function generateCalendar() {
  const calendar = document.getElementById("calendar");
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();
  for (let i = 0; i < firstDayOfWeek; i++) {
    let blankDay = document.createElement("div");
    calendar.appendChild(blankDay);
  }
  for (let day = 1; day <= totalDays; day++) {
    let daySquare = document.createElement("div");
    daySquare.className = "calendar-day";
    daySquare.textContent = day;
    daySquare.id = `day-${day}`;
    calendar.appendChild(daySquare);
  }
}
function showAddTaskModal() {
  document.getElementById("add-task-modal").style.display = "block";
}
function closeAddTaskModal() {
  document.getElementById("add-task-modal").style.display = "none";
}
function deleteTask(taskElement) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskElement.parentNode.removeChild(taskElement);
  }
}
function editTask(taskElement) {
  const newTaskDesc = prompt("Edit your task:", taskElement.textContent);
  if ((newTaskDesc !== null) & (newTaskDesc.trim() !== "")) {
    taskElement.textContent = newTaskDesc;
  }
}
function addTask() {
