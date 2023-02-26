/// <reference types = "cypress" />




describe("Navigate to Propcloud", () => {

  it("Should try login with invalid credential ", () => {
    cy.viewport(1920,1080)
    cy.fixture("users").then(users => {
      const wrong_user = users.wrong_user
      cy.login(wrong_user.username, wrong_user.password)
      cy.get('code').contains("Ugyldig epost eller passord")
      
    })
  })


  it("Should login with Valid Credential", () => {
    cy.viewport(1920,1080)
    cy.fixture("users").then(users => {
      const user = users.user
      cy.login(user.username, user.password)
      cy.get('.navbar-logged-in').should('be.visible');
      cy.wait(4000)
      
      

      
    })
  })

//   it("Should login and Search for Property ", () => {
//     cy.viewport(1920,1080)
//     cy.fixture("users").then(users => {
//       const user = users.user
//       cy.login(user.username, user.password)
//       cy.get('.navbar-logged-in').should('be.visible');
//       cy.get('.search-input').type('Oslo')
//       cy.wait(3000)
//       cy.get('tbody.svelte-yrf9dr > :nth-child(1) > .text-left').click()
   
  
//   })
// })

  


})