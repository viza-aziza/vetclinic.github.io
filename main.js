//------1---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form form');
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const okButton = document.getElementById("modal-ok-button");

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        
        // Здесь можно добавить код для отправки формы на сервер (например, с использованием fetch или XMLHttpRequest)

        // Показываем модальное окно
        modal.style.display = "block";
        
        // Очищаем форму после отправки
        form.reset();
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none"; // Закрываем модальное окно при нажатии на крестик
    });

    okButton.addEventListener("click", function() {
        modal.style.display = "none"; // Закрываем модальное окно при нажатии кнопки "ОК"
    });

    // Закрытие модального окна при нажатии вне его
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
//--------2-------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden'); 

    elements.forEach(element => {
        setTimeout(() => {
            element.classList.add('show');
        }, 500); 
    });
});
//---------------------------------------------------------------------------------