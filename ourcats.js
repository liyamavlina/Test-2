// Загружаем данные о товарах из файла shop.json.
fetch("./data/shop.json")
  // Преобразуем полученный ответ сервера из JSON в JavaScript-массив.
  .then(response => response.json())
  // После загрузки данных создаём HTML-карточки товаров.
  .then(data => {
    // Находим список на странице shop.html, в который нужно добавить товары.
    // Это <ul id="node_for_insert">; присваивая innerHTML, мы заменяем его содержимое
    // на HTML-строку, которую соберёт цепочка методов ниже.
    document.querySelector(".cat-container").innerHTML = data
      // Преобразуем каждый товар в HTML-разметку (метод map() вызывает функцию для каждого элемента массива).
      .map(cat => `
        <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                  
                    <img src="${cat.img}" class="card-img-top cat-img" alt="${cat.name}">
                    <div class="card-body">
                        <h5 class="card-title">${cat.name}</h5>
                        <p class="card-text text-muted flex-grow-1">${cat.description}</p>
                        <a href="#" class="btn btn-primary w-100 mt-auto">Meet me</a>
                    </div>
                </div>
            </div>
      `)
      // Объединяем HTML-код всех карточек в одну строку.
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Fail to fetch cats:", error));