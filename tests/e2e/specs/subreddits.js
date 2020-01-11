describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('/')
        // cy.get('[data-cy="goToSubreddits"]')
        cy.get('.v-btn__content [href="/vue-reddit/subreddits"]').click()
        cy.url().should('include', '/subreddits')
    })

    it('Remove all subreddits', () => {
        // check if initial posts are visible
        cy.get('[data-cy="post"]')
            .its('length')
            .should('be.gt', 0)

        cy.get('[data-cy="removeSubreddit"]').click({ multiple: true })

        cy.get('[data-cy="post"]')
            .its('length')
            .should('be.eq', 0)
    })

    it('Add subreddit', () => {
        const subredditName = 'vue'

        // add subreddit
        cy.get('[data-cy="addSubreditInput"]')
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
