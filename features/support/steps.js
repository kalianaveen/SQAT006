const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to figure1 website for invalid signup', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I type Username invalid signup', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input', 2000)
    .setValue('.register-page__username-input','abc')
    .setValue('.register-page__email-input','abc@gmail.com')
    .setValue('.register-page__password-input','abc123')
    .setValue('.register-page__confirm-password-input','abc123')
    .selectByIndex('.register-page__specialties-list', 6)
    .selectByIndex('.register-page__specialties-other-list', 12)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see invalid signup result', function(callback) {
  this.browser
    .waitForVisible('.invalid-field', 2000)
    .getText('.invalid-field').then(function(result) { 
    result.should.equal("Username must be at least 4 characters long (accepts letters, numbers and dashes)");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to figure1 website for valid signup', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I type Username valid signup', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input', 5000)
    .setValue('.register-page__username-input', this.randomUsers())
    .setValue('.register-page__email-input', this.randomUsers()+'@gmail.com')
    .setValue('.register-page__password-input','dakota123')
    .setValue('.register-page__confirm-password-input','dakota123')
    .selectByIndex('.register-page__specialties-list', 6)
    .selectByIndex('.register-page__specialties-other-list', 12)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see result valid signup', function(callback) {
  this.browser
    .waitForVisible('.email-confirmation-intro__email', 5000)
     callback();
  })


