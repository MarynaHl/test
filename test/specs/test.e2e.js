const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('E2E Test - Valid Login', () => {
    it('should perform valid login', () => {
        // Крок 1: Відкрити сторінку входу
        LoginPage.open();

        // Крок 2: Ввести коректний логін та пароль
        LoginPage.login('standard_user', 'secret_sauce');

        // Перевірка: Переконатися, що користувач був перенаправлений на сторінку з продуктами
        SecurePage.waitForPageToLoad(); // Це може бути метод з SecurePage
        expect(browser.getUrl()).toContain('inventory.html');

        // Перевірка: Переконатися, що на сторінці є продукти та кошик
        expect(SecurePage.isProductsDisplayed()).toBe(true);
        expect(SecurePage.isCartDisplayed()).toBe(true);
    });
});
