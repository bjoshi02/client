import Home from '../../src/User/pages/Home';

describe('Home.cy.js', () => {
    it('playground', () => {
       cy.mount(<Home />);
       cy.get('type=h1').should('have.text', 'Welcome to Indian Railways')
       cy.get('type=h2').should('have.text', 'Did you know')

    })
  })