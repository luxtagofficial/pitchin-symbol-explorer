describe('Symbol Explorer Header should', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('contain correct logo and title', () => {
        cy.get('.header-title')
            .contains('pitchIN blockchain explorer')

        cy.get('.header-logo')
        .should('have.attr', 'src')
        .and('contain', 'pitchin-logo')

    })

    it('contain Search Box component', () => {
        cy.get('.search-box')
    })

    it('contain Language Selector component', () => {
        cy.get('.language-selector')
    })
})