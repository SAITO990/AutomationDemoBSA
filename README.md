# Cypress Automation Project
This project contains automated tests using Cypress for https://demo.casino/. It verifies the functionality of register and and the replenishment of funds in the account.

## Installation
1. Clone the repository:  ```git clone https://github.com/SAITO990/AutomationDemoBSA```
2. Navigate to the project directory: ```cd [project directory]```
3. Install the dependencies: ```npm install```

### Configuration
1. Update the configuration settings: 


    Open cypress.json and update the necessary configuration settings such as base URL, test environment, etc.

2. Configure test data: 


    Open cypress.env.json and provide the required test data such as usernames, passwords, endpoints, etc.

## Running the Tests
1. To run the tests in the Cypress Test Runner:  ```npm run test```
2. To run the tests in headless mode: ```npm run test:headless```
3. To run the tests in headless mode using the Chrome browser: ```npm run test:headless:chrome```

### Note:
1. If you want to run the first test from the command line using the npx cypress run command, be aware that the test will fail. This is because when clicking the registration button, a captcha appears, and it cannot be automatically resolved when executed from the command line.

2. Since the first test cannot be completed, the second test will also fail. This is because the second test relies on having a registered user to perform the account top-up test.

3. To resolve this issue, you need to run the first test using the Cypress user interface (Cypress UI). This way, you can manually complete the captcha and successfully register a user. Once you have successfully completed the first test, the second test can be executed without any issues as it will have a registered user available.
