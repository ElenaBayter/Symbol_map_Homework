// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Блюда и их повара:
const dishes = new Map([
  ["Пицца 'Маргарита'", "Виктор"],
  ["Пицца 'Пепперони'", "Виктор"],
  ["Суши 'Филадельфия'", "Ольга"],
  ["Суши 'Калифорния'", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

// Карта для хранения соответствия блюд и поваров
let dishesAndCooks = new Map();
dishesAndCooks.set("Пицца", "Виктор");
dishesAndCooks.set("Суши", "Ольга");
dishesAndCooks.set("Десерты", "Дмитрий");

// Функция для получения имени повара, готовящего блюдо
function getCookForDish(dish) {
  console.log(`Блюдо ${dish} будет приготовлено ` + dishes.get(dish));
  //   dishes.get(dish);
}
// getCookForDish("Пицца 'Пепперони'");

// Карта для хранения заказов клиентов
let clientOrders = new Map();

// Функция для добавления заказа клиента
function addOrder(client, dish) {
  if (!clientOrders.has(client)) {
    clientOrders.set(client, []);
  }
  clientOrders.get(client).push(dish);
  if (dish.length > 1) {
    for (let i of dish) {
      console.log(`Блюдо ${i} будет приготовлено ` + dishes.get(i));
    }
  } else {
    console.log(`Блюдо ${dish} будет приготовлено ` + dishes.get(dish));
  }
}

// Пример использования
let client1 = { name: "Алексей" };
let client2 = { name: "Мария" };
let client3 = { name: "Ирина" };

addOrder(client1, ["Пицца 'Пепперони'", "Тирамису"]);
addOrder(client2, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
addOrder(client3, ["Чизкейк", "Тирамису"]);

// Вывод заказов клиентов
for (let [client, orders] of clientOrders) {
  console.log(`Заказы клиента ${client.name}: ${orders.join(", ")}`);
}
