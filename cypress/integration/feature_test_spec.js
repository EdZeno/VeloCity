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

  it('the sign up link redirects to the signup page', function() {
    cy.visit('http://localhost:3000')
    cy.contains("Don't have an account? Sign Up").click()
    cy.url().should('include', 'http://localhost:3000/signup')
  })

  it('user can sign up', function() {
    cy.visit('http://localhost:3000')
    cy.contains("Don't have an account? Sign Up").click()
    cy.get('#firstName').type('Ed3')
    cy.get('#lastName').type('Gut3')
    cy.get('#email').type('ed3@gmail.com')
    cy.get('#password').type('111')
    // cy.get('[data-cy=form]').submit()
    cy.contains('Sign Up').click()
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
