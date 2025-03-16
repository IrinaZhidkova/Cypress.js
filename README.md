# Cypress.js
<h2>UI Autotests on Cypress Framework</h2>

> **Project Status::**
> Public project: https://login.qa.studio/
> 
> 🟢 Supported (Active)

## Project Description and Goals
Automate part of the regression testing using Cypress.

## Test Cases Automated:
	•	Authorization with a valid login and valid password
	•	Authorization with a valid login and invalid password
	•	Validation check for the presence of “@” in the login field
	•	Password recovery flow verification

## Implementation Details:

1. BaseUrl is stored in configuration variables
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/baseUrl.png)

2. Usage of beforeEach and afterEach Hooks
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/hooks.png)

3. Authorization credentials are stored in a separate file
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/user_data.png)

4. Each page is described as an object with locators
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/locators.png)

## Local Test Execution (from Terminal)

	1.	Download the project
	2.	Navigate to the project directory in the terminal
	3.	Run the following command:

```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```
Expected result: A test execution report will be generated.
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/Cypress_cli.png)


##  Local Execution via Cypress UI
	1.	Download the project and open the terminal
	2.	Navigate to the project directory
	3.	Run the following commands in the project directory: npm `install --save-dev cypress@12.7.0`
	4.	Run in the terminal inside the project directory npm `npm i`
	5.	Run in the terminal inside the project directory. npm `npx cypress open`
  6.	Select E2E Testing and Google Chrome browser in Cypress UI.
	7.	Select the lesson_locators spec.

Expected result: A test execution report will be generated.
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/Cypress_UI.png)

 
