/// <reference types = "cypress" />


describe("Navigate to Propcloud", () =>
{

	beforeEach(() =>
	{
		// Reset the application state before each test
		cy.viewport(1920, 1080);
		cy.clearCookies();
		cy.clearLocalStorage();
	});
  


	it("Should login and Redirect to Property 0301/233/299's Address informasjon  ", () =>
	{
   
		cy.fixture("users").then(users =>
		{
			const user = users.user;
			cy.login(user.username, user.password);
			cy.get('.navbar-logged-in').should('be.visible');
			cy.visit('https://app.propcloud.no/#/propertyDetails/0301/233/299');
			cy.wait(3000);
			cy.get('#right-nav > .tab-container > .tabs > :nth-child(2)').click()

			//Assert Map Components
			cy.get('.MainPropertyBoundary > canvas').should('be.visible')

			//Assert Property details Component
			cy.get('#property-details-right-section > .grid').should('be.visible')

			//Annoser Count
			cy.get(':nth-child(1) > .card-header > .h-full > .text-sub-title-medium-14-600').contains('Annonser')

			// Scroll Annoser to bottom
			cy.get(':nth-child(1) > .darkfox-card-body').scrollTo('bottom', { easing: "linear" })
			
			cy.wait(3000)

			//Scroll Annoser to Top
			cy.get(':nth-child(1) > .darkfox-card-body').scrollTo('top',{easing:"swing"})

			//expand View
			cy.get(':nth-child(3) > .card-header > .h-full > div.svelte-1bhmq0s > .qualities > .expand-icon').click()
			cy.wait(2000)
			cy.get(':nth-child(1) > .row-container > .flex > .dropdown-item').should('be.visible')
			

			
			
        
    
		});

	});

	it("Should login and Redirect to Property 0301/233/299's Address informasjon and Expand Addresser  ", () =>
	{
   
		cy.fixture("users").then(users =>
		{
			const user = users.user;
			cy.login(user.username, user.password);
			cy.get('.navbar-logged-in').should('be.visible');
			cy.visit('https://app.propcloud.no/#/propertyDetails/0301/233/299');
			cy.wait(3000);
			cy.get('#right-nav > .tab-container > .tabs > :nth-child(2)').click()

			//Assert Map Components
			cy.get('.MainPropertyBoundary > canvas').should('be.visible')

			//Assert Property details Component
			cy.get('#property-details-right-section > .grid').should('be.visible')

			//Annoser Count
			cy.get(':nth-child(1) > .card-header > .h-full > .text-sub-title-medium-14-600').contains('Annonser')

			// Scroll Annoser to bottom
			cy.get(':nth-child(1) > .darkfox-card-body').scrollTo('bottom', { easing: "linear" })
			
			cy.wait(3000)

			//Scroll Annoser to Top
			cy.get(':nth-child(1) > .darkfox-card-body').scrollTo('top',{easing:"swing"})


			//Expand Addressor
			cy.get(':nth-child(2) > .card-header > .h-full > div.svelte-1bhmq0s > .qualities > .expand-icon > .svelte-a5okj5').click()

			cy.get('.text-darkfox-blue').should('be.visible')
			
			cy.get('.w-full > .justify-center > :nth-child(3)').click()

			
        
    
		});

	});
	
})