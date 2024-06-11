/// <reference types="Cypress"/>
beforeEach(()=>{
cy.visit('https://react-redux.realworld.io/')
})

it('Login test function',() => {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .form-control').type('laraibfakhar@gmail.com')
    cy.get('input[placeholder="Password"]').type('Click123@')
    cy.get('button[type="submit"]').click()
    // cy.wait(10000)
    cy.get(':nth-child(4) > .nav-link').click()

    cy.get(':nth-child(3) > .nav-link').click()
 })