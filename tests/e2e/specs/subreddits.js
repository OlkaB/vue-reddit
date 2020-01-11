describe('My First Test', () => {
    it('Check if initial subreddits are loaded', () => {
        cy.visit('/subreddits')
        cy.url().should('include', '/subreddits')

        // check posts are visible
        cy.get('[data-cy="post"]')
            .its('length')
            .should('be.gt', 0)
    })

    it('Add subreddit', () => {
        const subredditName = 'gifs'

        cy.visit('/subreddits')
        cy.url().should('include', '/subreddits')

        // add subreddit
        cy.get('data-cy="addSubreditInput"')
            .type(subredditName)
        cy.get('[data-cy="addSubreditIcon"]')
            .click()

        // check posts
        cy.get('[data-cy="post"]')
            .its('length')
            .should('be.gt', 0)

        cy.get('[data-cy="post"]').contains(subredditName)
    })
})
