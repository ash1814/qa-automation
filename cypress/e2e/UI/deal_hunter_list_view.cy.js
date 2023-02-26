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

	it('Should render Properties in List View ', () =>
	{
		cy.fixture("users").then(users =>
		{
			const user = users.user;
			cy.login(user.username, user.password);
			cy.get('.navbar-logged-in').should('be.visible');
			cy.wait(4000);
			cy.get('.middle > [href="#/insights"]').click();

			//click on List view
			cy.get('.header-button > :nth-child(2)').click()

			//Assert map component
			cy.wait(3000)
			cy.get('.pbwms > canvas').should('be.visible');
	
			//Assert analysis level menu
			cy.get('.analysis-level-menu').should('be.visible');

			// Assert filter component
			cy.get('.control-container').should('be.visible');

	
			// Assert Result Component
			cy.get('.text-darkfox-blue').should('be.visible');

			cy.get('.dealhunter-table-row > :nth-child(3) > .flex').c
    
		});


	


	});


// it('Should Export Transakjoner.xlsx', () => {
// 	cy.fixture("users").then(users =>
// 		{
// 			const user = users.user;
// 			cy.login(user.username, user.password);
// 			cy.get('.navbar-logged-in').should('be.visible');
// 			cy.wait(4000);
// 			cy.get('.middle > [href="#/insights"]').click();

// 			//click on List view
// 			cy.get('.header-button > :nth-child(2)').click()

// 			//Assert map component
// 			cy.wait(3000)
// 			cy.get('.pbwms > canvas').should('be.visible');
	
// 			//Assert analysis level menu
// 			cy.get('.analysis-level-menu').should('be.visible');

// 			// Assert filter component
// 			cy.get('.control-container').should('be.visible');

	
// 			// Assert Result Component
// 		cy.get('.text-darkfox-blue').should('be.visible');
		
// 		//click on export transakjoner file
// 		cy.get('.disabled\:opacity-50').focused().click()
		
		
			
// 		});


// });


})