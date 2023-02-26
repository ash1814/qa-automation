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

	it('Should render Analysis in Chart View ', () =>
	{
		cy.fixture("users").then(users =>
		{
			const user = users.user;
			cy.login(user.username, user.password);
			cy.get('.navbar-logged-in').should('be.visible');
			cy.wait(4000);
			cy.get('.middle > [href="#/insights"]').click();

			//click on Chart view
			cy.get('.option-menu > :nth-child(1) > :nth-child(1) > :nth-child(3)').click();

			//Assert map component
			cy.wait(3000);
			cy.get('.pbwms > canvas').should('be.visible');
	
			//Assert analysis level menu
			cy.get('.analysis-level-menu').should('be.visible');

			// Assert filter component
			cy.get('.control-container').should('be.visible');

	
			// Assert Result Component
			cy.get('.text-darkfox-blue').should('be.visible');

			
    
		});
	});


	it('Should Scroll Chart View', () =>
	{
		cy.fixture("users").then(users =>
		{
			const user = users.user;
			cy.login(user.username, user.password);
			cy.get('.navbar-logged-in').should('be.visible');
			cy.wait(4000);
			cy.get('.middle > [href="#/insights"]').click();

			//click on Chart view
			cy.get('.option-menu > :nth-child(1) > :nth-child(1) > :nth-child(3)').click();

			//Assert map component
			cy.wait(3000);
			cy.get('.pbwms > canvas').should('be.visible');
	
			//Assert analysis level menu
			cy.get('.analysis-level-menu').should('be.visible');

			// Assert filter component
			cy.get('.control-container').should('be.visible');

	
			// Assert Result Component
			cy.get('.text-darkfox-blue').should('be.visible');

			//scroll
			cy.get('.container-resize').scrollTo('bottom', { ensureScrollable: false })
			cy.wait(3000)
			cy.get('.container-resize').scrollTo('top', { ensureScrollable: false })
			cy.wait(3000)

			
    
		});

	
	});

})	


