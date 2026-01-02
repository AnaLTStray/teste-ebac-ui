/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro' , () => {
   
    beforeEach(() => {
    cy.visit('minha-conta/') 
    });

    it('Deve completar o cadastro completo', () => {
        cy.get('.woocommerce-privacy-policy-text > p').should('contain' , 'Seus dados pessoais serão usados para apoiar sua experiência em todo este site, para gerenciar o acesso à sua conta e para outros fins descritos em nossa política de privacidade.')
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('senhateste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.wait(5000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
});