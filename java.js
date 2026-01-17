let users = {};

let count = +(prompt("Введите количество пользователей (от 1 до 10):"));

for (let i = 1; i <= count; i++) {
  let name = prompt(`Введите имя`);
  let age = Number(prompt(`Введите возраст`));

  users[`user${i}`] = {
    name: name,
    age: age
  };

  console.log(`Пользователь - ${i}`);
  console.log(`Имя - ${name}`);
  console.log(`Возраст - ${age}`);
}

console.log("Весь объект пользователей:");
console.log(users);
