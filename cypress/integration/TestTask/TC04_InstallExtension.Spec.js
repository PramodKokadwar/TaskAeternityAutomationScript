describe('Install Extension spec', function(){

    it('Install Extension', function(){
   
       // Navigate to site
       cy.visit('https://wallet.superhero.com/account')

       // Click on checkbox and click on generate wallet button
       cy.wait(1000)
       cy.get("img[alt='Chrome']").click()

       // click on extension
       cy.get('div[aria-label="Add to Chrome"]').click()
       
    })
   
    })
   
 