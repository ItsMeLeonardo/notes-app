/* global cy */

describe('Note app', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
    cy.visit('http://localhost:3000')
  })

  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })

  it('login form can be open and close', () => {
    cy.contains('Show Login form').click()
  })

  it('login form can be open and close', () => {
    cy.contains('Show Login form').click()
    cy.contains('Cancel').click()
  })

  it('User can be login and write a note', () => {
    cy.contains('Show Login form').click()
    cy.get('[placeholder="Username"]').type('root')
    cy.get('[placeholder="password"]').type('secret')
    cy.get('#login-button').click()
    cy.contains('Add note').click()
    cy.get('[placeholder="Write your note here"').type('test with cypress')
    cy.contains('add note').click()
    cy.contains('test with cypress')
  })
})
