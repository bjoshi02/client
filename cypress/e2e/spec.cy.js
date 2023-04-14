describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('#email').type('x@x.c');
    cy.get('#password').type('x');
    cy.get('button[type="submit"]').click();
    cy.get('a[href*="home/info"]').click();
    cy.get('#train_no').type('100');
    cy.get('button[type="submit"]').click();
    
    //cy.get('form.action-form').submit();

  })
})