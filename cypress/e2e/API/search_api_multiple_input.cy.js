describe('Search Api with Multiple inputs', () => {
  const MAX_INPUTS = 50;
  
  for (let i = 1; i <= MAX_INPUTS; i++) {
    it(`Search Person with Valid  data ${i}`, () => {
      // Generate test data with different inputs
	const inputData = ['Daniel','Haakon','Christian','Martin','Thomas']

      
      // Send a request to the endpoint with the input data
	    for (let name of inputData)
	    {
		 cy.request({
        method: 'POST',
        url: 'https://stagingapp.propcloud.no/search/person',
	headers:
	{
        'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ=="         
	},
	
        body: {"name":name},
      }).then(response => {
       
	      expect(response.status).to.equal(200);
	      expect(response.body).have.length.least(10)
	      
	      cy.log(name)
	//       cy.log(response.body[0])
	      
        
      });   
		    
		    
	    }
     
    });
	  it(`Search Person with invalid data ${i}`, () => {
      // Generate test data with different inputs
	const inputData = ['GSDFSDFDSF','WWWWWWn','MartiXXXn','ThomSADas','XXXXXXXXXXXXXXXXXXXXXXXXXXXX']

      
      // Send a request to the endpoint with the input data
	    for (let name of inputData)
	{
		cy.request({
        	method: 'POST',
        	url: 'https://stagingapp.propcloud.no/search/person',
		headers:
	{
		'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ=="         
	},
	
		body: {"name":name},
      }).then(response => {
       
	      expect(response.status).to.equal(200);
	      expect(response.body.length).eq(0)
	      
	      cy.log(name)
	      cy.log(response.body);
	    
	      
        
      });   
		    
		    
	    }
     
    });
  }
});