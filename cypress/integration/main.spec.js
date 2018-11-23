describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the right title', () => {
    cy.title().should('equal', 'vst-search')
  })
  it('card has a header with Library', () => {
    cy.get('[data-cy ="Libraryheader"]')
      /*.contains('')*/
      .should('have.length', 1)
  })
})
