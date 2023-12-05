function submitForm() {
    const form = document.getElementById('custom-form');
    const formData = new FormData(form);

    // Вместо этого места добавьте логику для отправки данных на сервер
    // например, с использованием Fetch API или XMLHttpRequest
    console.log('Данные формы:', Object.fromEntries(formData));
    alert('Заявка отправлена!'); // Это может быть заменено на обработку результата отправки
}
