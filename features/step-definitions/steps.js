import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';


Given('user is on Login page', async () => {
  await LoginPage.open()
})

Then(/^user input "([^"]*)" as username$/, async (username) => {
  await LoginPage.inputUsername(username)
})

Then(/^user input "([^"]*)" as password$/, async (password) => {
  await LoginPage.inputPassword(password)
})

When(/^user input "([^"]*)" as username$ and input "([^"]*)" as password$/, async (username, password) => {
  await LoginPage.inputUsername(username)
  await LoginPage.inputPassword(password)
})

When('user click login button', async () => {
  await LoginPage.clickLoginButton()
})

Then('user should be redirected to homepage', async () => {
  await HomePage.validateOnHomePage()
})

When('user input {string} as username and {string} as password', async (username, password) => {
  await LoginPage.inputUsername(username)
  await LoginPage.inputPassword(password)
  await LoginPage.clickLoginButton()
})


Then(/^user should see error message "([^"]*)"$/, async (errorMessage) => {
  await LoginPage.validateWrongPasswordDisplayed(errorMessage)
  
})




