it('Handling JS Alerts',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get(':nth-child(1) > button').click()
    cy.on('window:alert',(str)=>{
        expect(str).to.equal('I am a JS Alert')
    })

})

it('Confirmation alert - Ok button',function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.contains('Click for JS Confirm').click()
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('I am a JS Confirm')
    })
    cy.get('#result').should('contain','You clicked: Ok')
})

it('Confirmation alert - Cancel button',function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.contains('Click for JS Confirm').click()
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('I am a JS Confirm')
        return false
    })
    cy.get('#result').should('contain','You clicked: Cancel')
})
