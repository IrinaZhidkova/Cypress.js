describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки

        cy.get('#mail').type(USER_LOGIN); // Ввели верный логин
        cy.get('#pass').type(USER_PASSWORD); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки

        cy.get('#mail').type(USER_LOGIN); // Ввели верный логин
        cy.get('#pass').type(USER_PASSWORD); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки

        cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль

        cy.get('#mailForgot').type(USER_LOGIN); //Ввожу почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажимаю отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Открываем сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

        cy.get('#mail').type(USER_LOGIN); // Вводим неверный логин
        cy.get('#pass').type(USER_PASSWORD); // Вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем текст ошибки
        cy.get('#messageHeader').should('be.visible'); // Текст ошибки должен быть виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка "крестик" должна быть видна
    });

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки

        cy.get('#mail').type(USER_LOGIN); // Ввели логин без @
        cy.get('#pass').type(USER_PASSWORD); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('Приведение логина к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // Открываем сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

        cy.get('#mail').type(USER_LOGIN); // Вводим логин с разными регистрами
        cy.get('#pass').type(USER_PASSWORD); // Вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что видим успешную авторизацию
        cy.get('#messageHeader').should('be.visible'); // Текст должен быть виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка "крестик" должна быть видна
    });
})