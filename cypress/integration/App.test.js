describe ('First Test', () => {
    it ('fills the input text correctly', () => {
        cy.visit ('/');
        const text = '123'
        cy.get('#text-input-area').type(text).should('have.value', text);
    });

    it ('should submit correctly, change the url and have the correct component rendering', () => {
        cy.visit ('/');
        cy.get('#text-input-area').type('123').should('have.value', '123');
        cy.get('#submit-button').click()
        cy.url().should('include', '/results?number=123');
        cy.get('textarea').should('have.value', 'CXXIII')
    });

    it ('should submit invalid values correctly', () => {
        cy.visit ('/');
        cy.get('#text-input-area').type('invalid').should('have.value', 'invalid');
        cy.get('#submit-button').click()
        cy.url().should('include', '/results?number=invalid');
        cy.get('b').should(($tag) => {
            const text = $tag.text();
            console.log($tag.text());
            expect(text).to.equal('Status: 500');
        });
        cy.get('pre').should(($tag) => {
            const text = $tag.text();
            console.log($tag.text());
            expect(text).to.equal(' Sorry, can\'t convert it - Internal Server Error: Error: No valid input found, please type in a valid number');
        });
    });

    it ('should handle values that are too large correctly', () => {
        cy.visit ('/');
        cy.get('#text-input-area').type('1343298472394723948729').should('have.value', '1343298472394723948729');
        cy.get('#submit-button').click()
        cy.url().should('include', '/results?number=1343298472394723948729');
        cy.get('b').should(($tag) => {
            const text = $tag.text();
            console.log($tag.text());
            expect(text).to.equal('Status: 500');
        });
        cy.get('pre').should(($tag) => {
            const text = $tag.text();
            console.log($tag.text());
            expect(text).to.equal(' Sorry, can\'t convert it - Internal Server Error: Error: this input is too big, please try a smaller number sorry!');
        });
    });
});