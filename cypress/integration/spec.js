


describe('Testing out cypress on LMR', () => {
  it('Start the test', () => {
      // cy.visit('https://getbootstrap.com/docs/4.4/examples/checkout/')
    
      cy.visit('acc.louismartini.com')
      cy.wait(5000)

  })

  // it('Fill out billing address information', () => {
  //     cy.billingInfo()
  // })

  // it('Check Checkbox items', () => {
  //    cy.checkBox()
  // })

  // it('Radio button check', () => {
  //     cy.radio()
  // })

  // it('Filling out credit card info', () => {
  //     cy.cc()
  // })

  // it('Enter Promo code', () => {
  //     cy.promo()
  // })

  // it('Submit form', () => {
  //     cy.submit()
  // })
})
















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Custom Commands
Cypress.Commands.add('billingInfo', () => {
  cy.get('#firstName').type('Angel').should('have.value', 'Angel')
  cy.get('#lastName').type('Barajas').should('have.value', 'Barajas')
  cy.get('#username').type('abarajas').should('have.value', 'abarajas')
  cy.get('#email').type('barajas_angel@hotmail.com').should('have.value', 'barajas_angel@hotmail.com')
  cy.get('#address').type('123 Street Lane').should('have.value', '123 Street Lane')
  cy.get('#country').select('United States')
  cy.get('#state').select('California')
  cy.get('#zip').type('12345').should('have.value', '12345')
})

Cypress.Commands.add('checkBox', () => {
  //Checking both boxes for now
  cy.get('#same-address').check({force:true}).should('be.checked')
  cy.get('#save-info').check({force:true}).should('be.checked')
})

Cypress.Commands.add('radio', () =>{
  //Choose just one, right now io just go through all of them
  cy.get('#paypal').check({force:true})
  cy.get('#credit').check({force:true})
  cy.get('#debit').check({force:true})
})

Cypress.Commands.add('cc', () =>{
  //Same issue as billing using premade data
  //Checking the data is properly typed but not needed at the end
  cy.get('#cc-name').type('Angel Barajas').should('have.value', 'Angel Barajas')
  cy.get('#cc-number').type('123456789').should('have.value', '123456789')
  cy.get('#cc-expiration').type('01/20').should('have.value', '01/20')
  //Pause added to see form filled out
  cy.get('#cc-cvv').type('123').should('have.value', '123')
})

//Dont have the submit promo code info on here because it refreshes when pressed on this page

Cypress.Commands.add('promo', () => {
  cy.get('.card > .input-group > .form-control').type('CODE12').should('have.value', 'CODE12').pause()
})

Cypress.Commands.add('submit', () =>{
  cy.get('.btn-lg').click()
})