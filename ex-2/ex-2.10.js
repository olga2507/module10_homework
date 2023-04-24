//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert(`
     Размер экрана с учетом полосы прокрутки: 
     ширина ${window.screen.width};
     высота ${window.screen.height}
     
     Размер экрана без учета полосы прокрутки: 
     ширина ${document.documentElement.clientWidth};
     высота ${document.documentElement.clientHeight}
    `)
});