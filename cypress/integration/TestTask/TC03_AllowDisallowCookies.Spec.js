describe('Allow Disallow Cookies', function(){

    it('Allow Disallow Cookies', function() {
         
        // Tab on most popular
        cy.get('button[class="button-plain active"]').click()

        // scroll the button into view, as if the user had scrolled
        cy.get('#scroll-horizontal button').scrollIntoView()
        .should('be.visible')

        // find the video to play with it 
        cy.get('.div.you-tube-embed>div.tip__cover-preview>button[class^="button-plain"]').first().click();

        // button-plain cookies-button or accept the cookies before play
        cy.get("button-plain cookies-button").click()

         // Click on play button on youtube (Play Button)
         cy.get("button-plain play play-button").click()

        // Click on puase button title is pause  
        cy.get('ytp-play-button ytp-button').click()

         // Play again it should work
         // Click on play button on youtube (Play Button)
         cy.get("button-plain play play-button").click()

        // Click on puase button title is pause  
        cy.get('ytp-play-button ytp-button').click()


    })  

})