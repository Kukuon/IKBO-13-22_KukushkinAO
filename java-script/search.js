document.addEventListener('DOMContentLoaded', function () {
    const pages = [
        { title: 'Главная страница', url: 'main.html' },
        { title: 'Автосалон', url: 'dealership.html' },
        { title: 'Об автосалоне', url: 'dealership.html' },
        { title: 'Автомобили', url: 'car-select.html' },
        { title: 'Модели', url: 'car-select.html' },
        { title: 'Аккаунт', url: 'account.html' },
        { title: 'Личный кабинет', url: 'account.html' },
        { title: 'Предложения', url: 'offers.html' },
        { title: 'Акции', url: 'offers.html' },
        { title: 'Стоимость', url: 'offers.html' },
        { title: 'Цены', url: 'offers.html' },
        { title: 'Сервис', url: 'service.html' },
        { title: 'Автомастерская', url: 'service.html' },
        { title: 'Контакты', url: 'main.html#contacts' },
        { title: 'Связаться с нами', url: 'main.html#contacts' },
        { title: 'Социальные сети', url: 'main.html#contacts' },
        { title: 'О нас', url: 'main.html#contacts' },
        { title: 'Полезные ссылки', url: 'main.html#contacts' },
        
    ];

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            // Если поле ввода пустое, скрыть результаты поиска
            searchResults.innerHTML = '';
            return;
        }

        const filteredPages = pages.filter(page => page.title.toLowerCase().includes(searchTerm));
        displayResults(filteredPages);
    }

    function displayResults(results) {
        searchResults.innerHTML = '';
        results.forEach(result => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = result.title;
            link.href = result.url;
            listItem.appendChild(link);
            searchResults.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', performSearch);
});
