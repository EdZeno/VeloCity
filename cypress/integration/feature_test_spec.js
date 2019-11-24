describe('Users can see an authorization link on the welcome page', function() {
it('There is a form for authorization on the landing page', function() {
  cy.visit('http://localhost:3000')
  cy.contains('Sign In')
})

it('An unregistered user can not sign in, an alert message is displayed', function() {
  cy.visit('http://localhost:3000')
  cy.get('#email').type('something@mail')
  cy.get('#password').type('23dsf')
  cy.get('form').submit()
  cy.on('uncaught:exception', (err, runnable) => {
  return false
})
  cy.on('window:alert', (str) => {
  expect(str).to.equal(`Your login details are incorrect, please try again.`)
})


})

// it('There is button for viewing bikes', function() {
//   cy.visit('http://localhost:3000')
//   cy.contains('Click here to view your Bikes')
// })
//
// it('Clicking view your Bikes redirects to a page with a Bikes element', function() {
//   cy.visit('http://localhost:3000')
//   cy.contains('Click here to view your Bikes').click()
//   cy.contains('Bikes')
// })
//
// it('Clicking the home button redirects to the home page', function() {
//   cy.visit('http://localhost:3000/bikes')
//   cy.contains('Home').click()
//   cy.url().should('include', 'http://localhost:3000')
// })
})
