describe('Search Person Count Api with Multiple inputs', () => {
  const MAX_INPUTS = 10;
  
  for (let i = 1; i <= MAX_INPUTS; i++) {
    it(`Search Person count with Valid  data ${i}`, () => {
      // Generate test data with different inputs
	const inputData = ['Daniel','Haakon','Christian','Martin','Thomas']

      
      // Send a request to the endpoint with the input data
	    for (let name of inputData)
	    {
		 cy.request({
        method: 'POST',
        url: 'https://stagingapp.propcloud.no/search/person/count',
	headers:
	{
        'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ=="         
	},
	
        body: {"name":name},
      }).then(response => {
       
	      expect(response.status).to.equal(200);
	      expect(response.body).have.property('success', true)
	      
	      cy.log(name)

	      
        
      });   
		    
		    
	    }
     
    });
	  it(`Search Person count with invalid data ${i}`, () => {
      // Generate test data with different inputs
	const inputData = ['GSDFSDFDSF','WWWWWWn','ASDzxc ','WEWQEWQE','XXXXXXXXXXXXXXXXXXXXXXXXXXXX']

      
      // Send a request to the endpoint with the input data
	    for (let name of inputData)
	{
		cy.request({
        	method: 'POST',
        	url: 'https://stagingapp.propcloud.no/search/person/count',
		headers:
	{
		'authorization': "Basic c29mdHdyZDp3ZWFyZXRoZWJlc3QxIQ=="         
	},
	
		body: {"name":name},
      }).then(response => {
       
	      expect(response.status).to.equal(200);
	      expect(response.body).have.property('success',false)
	      
	      cy.log(name)
	      			cy.log(JSON.stringify(response.body));

	    
	      
        
      });   
		    
		    
	    }
     
    });
  }
});