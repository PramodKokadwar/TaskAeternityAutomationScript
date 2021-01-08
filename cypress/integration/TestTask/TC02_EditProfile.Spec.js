describe('Edit Profile', function(){

   
    it('Edit Profile', function(){
   
        // Set path for uploading img
       const filepath = 'nature.png'
       // Click on my profile and click on edit profile button
       cy.get().click()
       // Navigate to site
       cy.visit('https://superhero.com/')
       cy.get('.profile__button edit__button [title="Edit Profile"]').attachFile(filepath);
       cy.get('.profile__button edit__button [type="button"]').click()

       // Type your current location and boigraphy in the input and click on save button
       cy.get('.location-input').type('Germany')
       cy.get('textarea[placeholder="Edit Biography"]').type('I am Trader')
       cy.get('button[class="profile__button save__button"]').click()
       
       // Validate location and bioghraphy is added
       cy.get('location').contains("Germany")
       cy.get('profile__description').contains("i am trader")
   
    })
   
   })