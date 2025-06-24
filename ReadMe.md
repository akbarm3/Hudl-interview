# Hudl Interview Test

This project is a UI test automation framework built using **Cypress** and **JavaScript**, following a **modular structure** and the **Page Object Model (POM)** design pattern.

---

## 🚀 Features

- Cypress test framework
- Modular test structure
- Page Object Model for maintainability
- Mochawesome integrated reporting
- Includes both negative and positive login test cases

---

## ✅ Pre-requisites

- **Node.js v22** or higher  
  You can check your Node version with:
  ```bash
  node -v

## Clone the repository

git clone https://github.com/akbarm3/Hudl-interview
cd Hudl-interview

## Install dependencies

npm install

## Run tests

npm run cy:test

This will execute Cypress tests in headless mode.

Generates a Mochawesome HTML test report.

## View the test report

mochareports/mochawesome.html

🔍 What This Test Covers
URL under test is defined in cypress.config.js (or cypress.json depending on setup).

Login Functionality:

Negative test cases (e.g., invalid credentials)

Positive test case with valid login credentials


🛠️ Notes

Ensure all environment variables and credentials (if any) are configured appropriately before running tests.

You can customize the test URL and configuration in cypress.config.js.


   
