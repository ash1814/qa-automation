// / <reference types = "cypress" />


describe('Navigate to Deal Hunter', () =>
{

beforeEach(() => {
// Reset the application state before each test
cy.viewport(1920,1080)
cy.clearCookies()
cy.clearLocalStorage()
})
it("Should login with Valid Credential", () => {

cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.navbar-logged-in').should('be.visible');
cy.wait(4000)
	
	

      
    })
})
	
it('Should Check "Byggear" Filter Functionality with valid input', () =>{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click().click()
cy.get(':nth-child(3) > .w-full > .flex-1').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
cy.get('.py-5').should('be.visible')	
	
	

      
})
	


});
	
it('Should Check "Toolpris" Filter Functionality with valid input', () =>{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click().click()
cy.get(':nth-child(4) > .w-full > .flex-1').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
cy.get('.py-5').should('be.visible')	
	
	

      
})
	


});
it('Should Check "Tomeareal" Filter Functionality with valid input', () =>{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click().click()
cy.get(':nth-child(5) > .w-full > .flex-1').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
cy.get('.text-darkfox-blue').should('be.visible')

cy.wait(3000)	
	
	

      
})
	


});	
	
it('Should Check "PROM" Filter Functionality with valid input', () =>{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click().click()
cy.get(':nth-child(6) > .w-full > .flex-1').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
cy.get('.text-darkfox-blue').should('be.visible')	
cy.wait(3000)
	

      
})
	


});
	
	
it('Should Check "BRA" Filter Functionality with valid input', () =>
{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click()
cy.get(':nth-child(7) > .w-full > :nth-child(1) > .text-sm').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
cy.get('.text-darkfox-blue').should('be.visible')	
cy.wait(3000)	
	

      
})
	


});
	
it('Should Check "BTA" Filter Functionality with valid input', () =>{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click().click()
cy.get(':nth-child(8) > .w-full > .flex-1').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
    cy.get('.text-darkfox-blue').should('be.visible')
    cy.get('.text-darkfox-blue').should('contain','38 652 Resultater')
cy.wait(3000)	
	

      
})
	


});
	
it('Should Check "Verdiestimat" Filter Functionality with valid input', () =>{
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.middle > [href="#/insights"]').click().click()
cy.get(':nth-child(10) > .w-full > .flex-1').click()
cy.get(':nth-child(2) > .input').type('10')
cy.get('.bottom-1 > .input').type('2')
cy.get('.text-darkfox-dominant').click()
cy.get('.py-5').should('be.visible')	
cy.wait(3000)	
	

      
})
	


});

	
	
    
});