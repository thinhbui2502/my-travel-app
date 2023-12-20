describe('Hotel Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/hotels');
  });

  it('should display the hotel page with a list of hotels', () => {
    // Check if the hotel page header is visible
    cy.get('.hotel-page').should('be.visible');
    cy.get('.page-header').should('have.text', 'Hotels');

    // Check if the hotel list is visible and contains at least one hotel
    cy.get('.hotel-list').should('be.visible');
    cy.get('.hotel-card').should('have.length.greaterThan', 0);
  });

  // it('should display correct information for each hotel', () => {
  //   // Check the information for each hotel in the list
  //   hotelsData.forEach((hotel, index) => {
  //     cy.get(`.hotel-card:eq(${index})`).within(() => {
  //       cy.get('h3').should('have.text', hotel.name);
  //       cy.get('p').eq(0).should('have.text', `Location: ${hotel.location}`);
  //       cy.get('p').eq(1).should('have.text', `Price: ${hotel.price}`);
  //     });
  //   });
  // });
});
