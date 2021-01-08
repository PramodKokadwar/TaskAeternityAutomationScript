describe('Submit a comment', function(){

    it('submit a comment to post', function() {
        
        // click on most popular link
        cy.get('sgv.router-link-exact-active-router-link-active>iconiconTips').click()
        cy.get('').click()
        cy.get('.tip__comments>div:first-of-type').click();

        // insert the comment
        cy.get('textarea[placeholder="Add reply"]').type("Nice Post")
        cy.get('button[title="Reply"]').click()

        // Click to reply on comment
        cy.get('.comments-count').click();
        cy.get('textarea[placeholder="Add reply"]').type("Thank you")
        cy.get('button[title="Reply"]').click()
         

    })

})