async function createTodo(todoBody) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todoBody)
    });

    // Проверка статуса
    if (response.status !== 201) {
      throw new Error(`Ошибка: ожидался статус 201, получен ${response.status}`);
    }

    const data = await response.json();

    // Проверка id
    if (data.id !== 201) {
      throw new Error(`Ошибка: ожидался id=201, получен ${data.id}`);
    }

    return data;
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  } finally {
    console.log("Работа функции завершена");
  }
}

// пример вызова
createTodo({
  userId: 201,
  title: "Сделать ДЗ",
  completed: false
}).then((result) => {
  if (result) {
    console.log("Созданный todo:", result);
  }
});