![License](https://img.shields.io/github/license/Novikov-Pavel/myPizza.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/Novikov-Pavel/myPizza.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/Novikov-Pavel/myPizza.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/Novikov-Pavel/myPizza.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/Novikov-Pavel/myPizza.svg?style=for-the-badge)
    
# Личный кабинет пользователя

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Что выболнено по заданию:

1. Галерея должна иметь динамическое содержимое – список картинок должен быть получен сиспользованием веб-запросов. 
   Сделано
2. Использовать
https://jsonplaceholder.typicode.com/
или любое другое HTTP API скартинками, расположенное в открытом доступе
    Использовал jsonplaceholder
3. Количество картинок - 16 (не должно быть скролла страницы, если высота экрана пользователя равна высоте макета)
    При высоте экрана, равной высоте макета - скрола нет.
4. Для выполнения сетевых запросов использовать Fetch API.
    Сделано
5. Реализовать возможность переключения режима отображения галереи.
    Сделано
6. При нажатии на кнопку переключения следует изменять CSS-свойство display
    Сделано.
7. при использовании flexbox все элементы сетки должны быть одного размера (как намакете);
    при использовании CSS Grid элементы должны быть разных размеров и соответствоватьрасположению на рисунке ниже;
    Сделано в соответствии с макетами.
8. Картинки для grid-галереи рекомендуется также получать через API, но в крайнем случаеможно использовать статичные ссылки;
    В фетч запросе установлен лимит на кач-во картинок в зависимости от flex или grid вёрстки.
9. Картинки должны заполнять предоставленный контейнер полностью.
    Сделано
10. В верхней части страницы необходимо подключить форму.
    Сделано.
11. валидация поля ввода – пользователю разрешить указывать только цифры (нельзя: буквы,пробелы, знаки препинания и иные символы);
    В инпут нельзя ввести ничего, кроме цифр. Фетч запрос отправляется по кнопке справа и рендерятся картинки на странице.
12. введенное число должно использоваться программой в качестве части “{albumId}”следующего URL-шаблона: “
https://jsonplaceholder.typicode.com/albums/{albumId}/photos”
для осуществления сетевого взаимодействия.
    Сделано. Чуть выше писал, как использовал
13. шрифты, используемые в макете, подключать с использованием CSS-правила @font-face
    Сделано
14. картинки должны представлять собой узел типа img
    Сделано
15. Вёрстку сделал под экран 1600px, как в задании.

Стек технологий: SCSS, ReactJS, Typescript

Дополнительно сделано:

1. Сделал hover при наведении на табы в sidebar
2. Подключил библиотеку Link для перехода для написании почты. Ссылка активна.
3. К табам, картинкам и пр добавил также hover
4. При выборе категории устанавливается state и применяются стили (border, hover)
5. Добавил поиск в галерее по title.
6. При вводе символов в поиске по галее рендериться svg "удалить".
7. Кнопка удалить работает - очищает массив с картинками.

## Screenshots

<img src="https://raw.githubusercontent.com/Novikov-Pavel/mkskom-test-task/master/2023-08-02_17-59-07.png" alt="Скрин приложения" />

## Built With

<a href="https://www.typescriptlang.org/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" height="40px" width="40px" alt="Typescript" />
</a>
<a href="https://reactjs.org/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" alt="ReactJS" />
</a>
<a href="https://sass-lang.com/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" height="40px" width="40px" alt="SASS" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" alt="CSS" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" alt="HTML" />
</a>

## Getting Started

### Prerequisites

1. Установите среду разработки VS Code (https://code.visualstudio.com/download) или любую другую.
2. Установите терминал или используйте встроенный в VS Code. 

### Installation

Для запуска проекта потребуется:
1. Войти в терминал Ctrl+J
2. Войти в в терминале в каталог "client" вбив команду cd client
3. Написать в терминале npm start
4. Запустится браузер с веб-приложением.

## Acknowledgements

Разрабатывал самостоятельно

## Contacts

<a href="https://t.me/react_jobfrontend/">
  <img src="https://img.shields.io/badge/telegram-26A5E4.svg?&style=for-the-badge&logo=telegram&logoColor=white" height=28 width=110 />
</a> 
<a href="https://wa.me/79778129630/">
  <img src="https://img.shields.io/badge/whatsapp-25D366.svg?&style=for-the-badge&logo=whatsapp&logoColor=white" height=28 width=110 />
</a>
<a href="https://www.linkedin.com/in/Novikoff-Pavel">
  <img src="https://img.shields.io/badge/linkedin-0A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white" height=28 width=110/>
</a>
<a href="mailto:react@jobfrontend.ru">
  <img alt="" src="https://static.tildacdn.com/tild3334-3665-4263-b964-373834323762/yan.png" height=28 width=110/>
</a>
