describe('API Test', () => {

    

    it('Login with valid credentials hitting api endpoint', () => {

        cy.request({

            method: 'POST',
            url: 'https://stagingapp.propcloud.no/login',
            form : true,
            headers: {
                'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
                'Cookie': "auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmo5blhQa0NNOUNOamxnVG5ocG9BYlBMSExvZG1hZEhxT0FpamJvdFNjYjA1bHFueVplcmtZV3Zqc2FkdmZZR0VCMDNXT2lVVHdOamhTdFpvVFdGaDVLT2pWa29ha2ZOMU9adWRJQlhnaXZucXpQbTJsU2tLMFZoalc0UzZEWXl1aXU0QVdjNkFvUkhUc0pHd1U4clhTYmxVTUducUVjOTN2ZmtDRF9GYWE2WUlfRzhuWjhSR1lyaFBSNFAtWno2LUtTUEJPQzBUVDRueVVUNWtTTE0xQnlKUnctNVgyNUQweEtLU0Fra0JyTnFleWprOVFKMFctLXkyWUxlQ1RxczAySjRuUTFsUnpId0MxcWNHdE51cmNUMGxibGVCMTQ5d2YtaG1sWVUtdmtxUm5fZFdpWk9WcWktbEJtODE5RkRqYVk3anpkLWI5T0pMajYyWXhGQlRLMTBFOTR2SFBoQVZETGs1QkF0SlR2LVB2VFBaeEJDMHV2TWZrMzlvUXo1OFJWR3pHRHE4eS1ycW5FZjFLTlZwSnpNaWlqek93SEdqcTFYS2FyalRzOXN6NS1XNGphMEhnZnZtakpNX2E3S0FaMG5aeHBqRHljek5ESHVsV0RPbnpLQnJ3YXlqeGkyeEZsbTh6VHN3TEpiektCc1c5RXRySWRNXzFGUnFETndmOVdKeWRPRmp2bWVrNXhqcUJjdG5lYmxac3B0V1RZTGZxVy1FSV9DV1VDV2RDcTNCbFZ0RjFuNVN6T2k4T1JkSjZ0NmlWOHhCb2ZMV01DSHllZDhvVF9IRGkyUTM2b0RyQ3A2dGZlNGVKYkJTeEIyXzJWVXR0OXZmV2l0aDlXWThEOWNBYkVUeHNDemV2VWhVenM5alhPbjVWSGc9PSIsImV4cCI6MTY3NzA5Njk5OX0.vTvY61LvHLlGS8mgqlptTwdgG8LSWceiQ_9RVuM_KM4"
               
                
	

	
                
            },
            body: {
                email: 'tanvir360911@gmail.com',
                password: 'Test@1234'
            }
           
        }).then((response) => {
            expect(response.status).to.eq(200);
            // expect(response.body).should.have.property('success', true)
           
         cy.log(JSON.stringify(response.body))

    });
 

    })
    

    it('Login with command based Network CAll', () => {
     cy.viewport(1920,1080)
    cy.fixture("users").then(users => {
      const user = users.user
      cy.LoginNetworkRequest(user.username, user.password)
     
       
      
    })     
});
})


it('Login with invalid credentials hitting api endpoint', () => {

    cy.request({

        method: 'POST',
        url: 'https://stagingapp.propcloud.no/login',
        headers: {
            'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ==",
             'Cookie': "auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiZ0FBQUFBQmo5blhQa0NNOUNOamxnVG5ocG9BYlBMSExvZG1hZEhxT0FpamJvdFNjYjA1bHFueVplcmtZV3Zqc2FkdmZZR0VCMDNXT2lVVHdOamhTdFpvVFdGaDVLT2pWa29ha2ZOMU9adWRJQlhnaXZucXpQbTJsU2tLMFZoalc0UzZEWXl1aXU0QVdjNkFvUkhUc0pHd1U4clhTYmxVTUducUVjOTN2ZmtDRF9GYWE2WUlfRzhuWjhSR1lyaFBSNFAtWno2LUtTUEJPQzBUVDRueVVUNWtTTE0xQnlKUnctNVgyNUQweEtLU0Fra0JyTnFleWprOVFKMFctLXkyWUxlQ1RxczAySjRuUTFsUnpId0MxcWNHdE51cmNUMGxibGVCMTQ5d2YtaG1sWVUtdmtxUm5fZFdpWk9WcWktbEJtODE5RkRqYVk3anpkLWI5T0pMajYyWXhGQlRLMTBFOTR2SFBoQVZETGs1QkF0SlR2LVB2VFBaeEJDMHV2TWZrMzlvUXo1OFJWR3pHRHE4eS1ycW5FZjFLTlZwSnpNaWlqek93SEdqcTFYS2FyalRzOXN6NS1XNGphMEhnZnZtakpNX2E3S0FaMG5aeHBqRHljek5ESHVsV0RPbnpLQnJ3YXlqeGkyeEZsbTh6VHN3TEpiektCc1c5RXRySWRNXzFGUnFETndmOVdKeWRPRmp2bWVrNXhqcUJjdG5lYmxac3B0V1RZTGZxVy1FSV9DV1VDV2RDcTNCbFZ0RjFuNVN6T2k4T1JkSjZ0NmlWOHhCb2ZMV01DSHllZDhvVF9IRGkyUTM2b0RyQ3A2dGZlNGVKYkJTeEIyXzJWVXR0OXZmV2l0aDlXWThEOWNBYkVUeHNDemV2VWhVenM5alhPbjVWSGc9PSIsImV4cCI6MTY3NzA5Njk5OX0.vTvY61LvHLlGS8mgqlptTwdgG8LSWceiQ_9RVuM_KM4"
            
        },
        body: {
            email: 'tanvir360911@gmail.com' ,
            password: 'asdasdasdTest@1234'
        }
    }).then((response) => {
      
        expect(response.body).to.have.property('success', false)
         cy.log(JSON.stringify(response.body))
       
    
    });
    



})




