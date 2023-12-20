// cypress/integration/search.spec.js
describe('Search Component', () => {
    beforeEach(() => {
      // Assuming your app is running on localhost:3000
      cy.visit('http://localhost:3000/search');
    });
  
    it('should display the search page', () => {
      cy.get('.search-container').should('be.visible');
      cy.get('.page-header').should('have.text', 'Search Flights');
    });
  
    it('should allow users to enter a destination', () => {
      const destination = 'New York';
  
      cy.get('.search-input').type(destination).should('have.value', destination);
    });
  
  });
  