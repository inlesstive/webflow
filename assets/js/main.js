



const langagebtn = document.querySelector('.header__header');

langagebtn.addEventListener('click', () =>{
    let headerBody = document.querySelector('.header__body')
    headerBody.classList.toggle('active')
})

const ru = document.getElementById('ru');
const en = document.getElementById('en');

ru.addEventListener('click', () => {
    changeLanguage('ru')
})

en.addEventListener('click', () => {
    changeLanguage('en')
})

function changeLanguage(language) {
    // Отправляем AJAX-запрос на загрузку JSON файла
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${language}.json`, true);
    xhr.onload = function() {
      // Парсим полученный JSON
      var translations = JSON.parse(xhr.responseText);
  
      // Получаем переводы для выбранного языка
      var languageTranslations = translations;
  
        console.log(translations);
      // Заменяем текст на странице согласно переводам
      document.getElementById('navServices').innerText = translations.navService;
      document.getElementById('navWork').innerText = translations.navWork;
    };
    xhr.send();
  }