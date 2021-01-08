describe('Create and Edit Profile', function(){

 it('Create an account', function(){

    // Navigate to site
    cy.visit('https://superhero.com/')

    // Click on icon diamond
    cy.get('svg[class="icon iconDiamond"]').first().click()
    cy.wait(1000)
    // Click on checkbox and click on generate wallet button
    cy.get('.checkbox-container').click()
    cy.get('.primary-button').first().click()
    // click on skip button and click on generate wallet button
    cy.get('.skip-button').click()
    cy.get('.generate-wallet').click()
    //click on checkbox and click on proceed to wallet button
    cy.wait(1000)
    cy.get('.primary-button').first().click()
    cy.get('.checkmark').click()
 })

 
 })

})