describe(`Login Page`, () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  })

  it.only('Verify User Log-in with valid data', () => {
    cy.log('qwerty');
  });
});