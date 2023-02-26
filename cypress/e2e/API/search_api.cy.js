/// <reference types = "cypress" />

describe('Search API Test', () => {

    

    it('Login with valid credentials hitting api endpoint', () => {

        cy.request({

            method: 'POST',
            url: 'https://stagingapp.propcloud.no/login',
            headers: {
                'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ=="

                
            },
            body: {
                email: 'tanvir360911@gmail.com' ,
                password: 'Test@1234'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // expect(response.body).should.have.property('success', true)
            cy.log(JSON.stringify(response.body));
              
   });
 })
    it('Search Person', () => {

        cy.request({

            method: 'POST',
            url: 'https://stagingapp.propcloud.no/search/person',
            headers: {
                'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ=="

                
            },
            body: {
                name: 'Daniel' 
              
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // expect(response.body).should.have.property('success', true)
            cy.log(JSON.stringify(response.body));
           
   });
        
    });




})