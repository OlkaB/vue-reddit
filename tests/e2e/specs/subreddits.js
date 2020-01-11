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

        // remove any existing subreddits
        cy.get('[data-cy="removeSubreddit"]').click({ multiple: true })

        // check UI
        cy.get('[data-cy="alertSearch"]').should('be.visible')

        cy.get('[data-cy="post"]')
            .should('not.exist')
    })

    it.only('Add subreddit', () => {
        const subredditName = 'Vue'

        cy.get('[data-cy="removeSubreddit"]').click({ multiple: true })

        // add subreddit
        cy.get('[data-cy="addSubreditInput"]')
            .type(subredditName)
        cy.get('[data-cy="addSubreditIcon"]')
            .click()

        // check posts
        cy.get('[data-cy="post"]')
            .its('length')
            .should('be.gt', 0)

        cy.get('[data-cy="post"] [data-cy="subredditName"]')
            .first()
            .invoke('text')
            .then(text => {
                expect(text.trim()).to.be.equal(subredditName)
            })

    })
})
