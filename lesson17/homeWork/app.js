// Задаем вопрос с помощью prompt и сохраняем ответ в переменной
const salary = prompt("Какая у вас зарплата?");

// Создаем переменные для различных сообщений в зависимости от ответа
let message;

if (salary === null) {
  message = "Вы отменили ввод";
} else if (isNaN(salary) || salary === "") {
  message = "Вы ввели некорректное значение";
} else {
  const salaryValue = parseFloat(salary);
  if (salaryValue < 1000) {
    message = "Ваша зарплата меньше 1000";
  } else {
    message = "Ваша зарплата составляет " + salaryValue + " долларов";
  }
}

// Показываем сообщение в alert
alert(message);

// Выводим сообщение в консоль
console.log("Ответ:", message);

alert("adasjffkajf");
