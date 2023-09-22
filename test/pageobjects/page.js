class Page {
    // Опис загальних елементів сторінок, які можуть використовуватися на багатьох сторінках

    // Наприклад, загальний метод для перевірки заголовка сторінки
    checkPageTitle(expectedTitle) {
        expect(browser.getTitle()).toEqual(expectedTitle);
    }
}

module.exports = new Page();
