// Загружаем данные о программе и её участниках.
fetch("programme.json")
  .then(response => response.json())
  .then(({ program, people }) => {
    // Название программы — в заголовок вкладки браузера и в заголовок страницы.
    document.title = program.title;
    document.querySelector("#program-title").textContent = program.title;
    // textContent вставляет именно текст, а не HTML — это безопасно.
    document.querySelector("#program-description").textContent = program.description;
    document.querySelector("#program-details").textContent = program.details;
    document.querySelector("#programUrl").href = program.programUrl;

    // Для каждого участника строим HTML-карточку, склеиваем и вставляем в контейнер.
    document.querySelector("#people-list").innerHTML = people
      .map(person => `
       <div class="col-md-6 col-lg-4">
                <div class="card h-100  text-center p-4">
                    <img src="Ursul.webp" class="rounded-circle mx-auto mb-3" alt="Program Director" style="width: 120px; height: 120px; object-fit: cover;">
                   
                    
                    <h5 class="card-title">Ursul Natalia Valeryevna</h5>
                    <p class="text-muted small mb-2">Academic Supervisor</p>
                   
                   
                    <p class="card-text mb-3">
                        <a href="mailto:nursul@hse.ru">nursul@hse.ru</a>
                    </p>
            
                    <a href="https://www.hse.ru/en/org/persons/133062680/" target="_blank" class="btn btn-primary w-100 mt-auto">View Profile</a>
                </div>
            </div>
      `)
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Не удалось загрузить данные программы:", error));