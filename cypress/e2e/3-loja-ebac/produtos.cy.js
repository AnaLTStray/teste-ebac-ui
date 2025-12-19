/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve elecionar um produto da lista', () => {
        cy.get('.product-block') 
        //.first ()
        //.last ()
        //.eq(2)
        .contains('Argus All-Weather Tank')
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')

    });

    it('Deve selecionar um produto - 01', () => {
        cy.get('.product-block') 
        .first ()
        //.last ()
        //.eq(2)
        //.contains('Argus All-Weather Tank')
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')  
        
    });
    
        it('Deve selecionar um produto - 02', () => {
        cy.get('.product-block') 
        //.first ()
        //.last ()
        .eq(4)
        //.contains('Argus All-Weather Tank')
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')  
        
    });
});
  