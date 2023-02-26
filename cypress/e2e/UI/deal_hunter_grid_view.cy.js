/// <reference types = "cypress" />


describe('Navigate to Deal Hunter', () =>
{

beforeEach(() =>
{
// Reset the application state before each test
cy.viewport(1920, 1080);
// cy.visit('https://app.propcloud.no');
	cy.clearCookies();
	cy.clearLocalStorage();
});

it('Should render Properties in Grid View ', () => {
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.navbar-logged-in').should('be.visible');
cy.wait(4000)
cy.get('.middle > [href="#/insights"]').click()

//check map component
	cy.get('.pbwms > canvas').should('be.visible')
	
//check analysis level menu
	cy.get('.analysis-level-menu').should('be.visible')

// check filter component
	cy.get('.control-container').should('be.visible')

// check Property Component
	
	cy.get('.grid-container').should('be.visible')
	
// check Result Component
	cy.get('.text-darkfox-blue').should('have.value', "")
    
})


});
	
it('Should render Eiendomer in Grid View ', () => {
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.navbar-logged-in').should('be.visible');
cy.wait(4000)
	cy.get('.middle > [href="#/insights"]').click()
	
//Check Eiendomer
	cy.get('[data-table="Eiendommer"]').click()

//check map component
	cy.get('.pbwms > canvas').should('be.visible')
	
//check analysis level menu
	cy.get('.analysis-level-menu').should('be.visible')

// check filter component
	cy.get('.control-container').should('be.visible')

// check Property Component
	
	cy.get('.grid-container').should('be.visible')
	
// check Result Component
	cy.get('.text-darkfox-blue').should('have.value', "")
    
})


});
	
it('Should render Bygg in Grid View ', () => {
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.navbar-logged-in').should('be.visible');
cy.wait(4000)
	cy.get('.middle > [href="#/insights"]').click()
	
//Check Bygg
	cy.get('.analysis-level-selected').click()

//check map component
	cy.get('.pbwms > canvas').should('be.visible')
	
//check analysis level menu
	cy.get('.analysis-level-menu').should('be.visible')

// check filter component
	cy.get('.control-container').should('be.visible')

// check Property Component
	
	cy.get('.grid-container').should('be.visible')
	
// check Result Component
	cy.get('.text-darkfox-blue').should('have.value', "")
    
})


});	
it('Should render Transaksjoner in Grid View ', () => {
cy.fixture("users").then(users => {
const user = users.user
cy.login(user.username, user.password)
cy.get('.navbar-logged-in').should('be.visible');
cy.wait(4000)
	cy.get('.middle > [href="#/insights"]').click()
	
//Check Transaksjoner
	cy.get('[data-table="Transaksjoner"]').click()

//check map component
	cy.get('.pbwms > canvas').should('be.visible')
	
//check analysis level menu
	cy.get('.analysis-level-menu').should('be.visible')

// check filter component
	cy.get('.control-container').should('be.visible')

// check Property Component
	
	cy.get('.grid-container').should('be.visible')
	
// check Result Component
	cy.get('.text-darkfox-blue').should('be.visible')
    
})


});	


})