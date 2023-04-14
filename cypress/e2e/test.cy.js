describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000');
      cy.get('#email').type('bj@gmail.com');
      cy.get('#password').type('bj123');
      cy.get('button[type="submit"]').click();
      cy.get('a[href*="home/book"]').click();
      cy.get('#train_no').type('100');
      cy.get('#date').type('2022-12-20');
      cy.get('button[type="submit"]').click();
      cy.wait(1000, {timeout: 2000});
      cy.get('a[href*="home/tickets"]').click();
      cy.wait(2000, {timeout: 3000});
      cy.get('a[href*="home/cancel"]').click();
      cy.get('button[type="button"]').each(($button) => {
        cy.wrap($button).click();
      });
      //cy.get('button[type="button"]').click();
      cy.wait(2000, {timeout: 3000});
      cy.get('.MuiButton-contained').click();

      //cy.get('form.action-form').submit();
  
    })
  })