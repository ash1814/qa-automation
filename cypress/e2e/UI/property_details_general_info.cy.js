// / <reference types = "cypress" />


describe("Navigate to Propcloud", () => {

beforeEach(() => {
// Reset the application state before each test
cy.viewport(1920,1080)
cy.clearCookies()
cy.clearLocalStorage()
})
  
  
  it("Should login and Redirect to Property 0301/233/299  ", () =>
  {
   
    cy.fixture("users").then(users =>
    {
      const user = users.user;
      cy.login(user.username, user.password);
      cy.get('.navbar-logged-in').should('be.visible');
      cy.visit('https://app.propcloud.no/#/propertyDetails/0301/233/299')
     
      cy.wait(3000)
        
    
    });

  })

  it('Should Redirect to Property Details Expand & Minimize Map View', () => {
    cy.fixture("users").then(users =>
    {
      const user = users.user;
      cy.login(user.username, user.password);
      cy.get('.navbar-logged-in').should('be.visible');
      cy.visit('https://app.propcloud.no/#/propertyDetails/0301/233/299')
    
     
      cy.wait(3000)
       
     
     
      cy.get('#property-details-right-section').scrollTo('bottom', { easing: 'linear' })
       cy.wait(3000)
      cy.get('#property-details-right-section').scrollTo('top', { ensureScrollable: false })
      
      //expand Map View
      cy.get(':nth-child(4) > .tooltip > .w-10').click()

      cy.wait(3000)

    // Minimize Map View
      cy.get(':nth-child(4) > .tooltip > .w-10').click()
      cy.wait(3000)
    
    });
  
  });
  
  it('Should Redirect to Property Details and enable Hex Map View', () => {
    cy.fixture("users").then(users =>
    {
      const user = users.user;
      cy.login(user.username, user.password);
      cy.get('.navbar-logged-in').should('be.visible');
      cy.visit('https://app.propcloud.no/#/propertyDetails/0301/233/299')
     
      cy.wait(3000)
       
     
     
      cy.get('#property-details-right-section').scrollTo('bottom', { easing: 'linear' })
       cy.wait(3000)
      cy.get('#property-details-right-section').scrollTo('top', { ensureScrollable: false })
      
      //expand Map View
      cy.get(':nth-child(4) > .tooltip > .w-10').click()

      cy.wait(3000)

      //Enable Hex Map
      cy.get(':nth-child(12) > [slot="hoverelement"] > .svelte-1y7os16 > .btn').click()

    cy.get('#property-details-right-section').scrollTo('bottom',{easing:'linear'})
  
    
    });
  
  });
     
  })
      