document.getElementById("heartButton").addEventListener("click", function (event) {
    const heartContainer = document.getElementById("heartsContainer");
    const button = event.target;
  
    // Получаем координаты кнопки
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top;
  
    // Создаём сердечко
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
  
    // Устанавливаем начальное положение сердечка — центр кнопки
    heart.style.left = `${buttonX}px`;
    heart.style.top = `${buttonY}px`;
  
    // Добавляем сердечко в контейнер
    heartContainer.appendChild(heart);
  
    // Удаляем сердечко через 2 секунды (по завершении анимации)
    setTimeout(() => {
      heart.remove();
    }, 2000);
  });
  