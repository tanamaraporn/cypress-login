/// <reference types="Cypress" />

  describe('My First Test: Cypress', () => {
    it('Login', () => {
      cy.visit('https://dashboard.cypress.io/login/email')
      cy.get('input[type="email"]').type('tanamaraporn19@gmail.com')
      cy.get('input[type="password"]').type('tan26583459')
      cy.get('button').contains('Log In').should('be.visible').click()
    })

    it('Login with Wrong Email', () => {
      cy.visit('https://dashboard.cypress.io/login/email')
      cy.get('input[type="email"]').type('tanamaraporn@gmail.com')
      cy.get('input[type="password"]').type('tan26583459')
      cy.get('button').contains('Log In').should('be.visible').click()
      cy.contains("Incorrect email address or password")
    })

    it('Login with Wrong Password', () => {
      cy.visit('https://dashboard.cypress.io/login/email')
      cy.get('input[type="email"]').type('tanamaraporn19@gmail.com')
      cy.get('input[type="password"]').type('26583459')
      cy.get('button').contains('Log In').should('be.visible').click()
      cy.contains("Incorrect email address or password")
    })

    it('Login with Account not in system yet', () => {
      cy.visit('https://dashboard.cypress.io/login/email')
      cy.get('input[type="email"]').type('tanamaraporn26@gmail.com')
      cy.get('input[type="password"]').type('tan26583459')
      cy.get('button').contains('Log In').should('be.visible').click()
      cy.contains("Incorrect email address or password")
    })
  })
