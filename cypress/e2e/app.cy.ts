describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/Todo_app');
  })
})

describe('check func', () => {
  it('check add new task', ()=> {
    cy.visit('http://localhost:3000/Todo_app');
    cy.get('div').contains('Test task').should('not.exist');
    cy.get('input').should('exist');
    cy.get('input').type('Test task');
    cy.get('button').contains('Add').click();
    cy.get('div').contains('Test task').should('exist');
  })

  it('check counter', () => {
    cy.visit('http://localhost:3000/Todo_app');
    cy.get('span').contains('0 items left').should('exist');
    cy.get('div').contains('Test task').should('not.exist');
    cy.get('input').should('exist');
    cy.get('input').type('Test task');
    cy.get('button').contains('Add').click();
    cy.get('div').contains('Test task').should('exist');
    cy.get('span').contains('0 items left').should('not.exist');
    cy.get('span').contains('1 items left').should('exist');
  })

  it('check delete', () => {
    cy.visit('http://localhost:3000/Todo_app');
    cy.get('div').contains('Test task').should('not.exist');
    cy.get('input').should('exist');
    cy.get('input').type('Test task');
    cy.get('button').contains('Add').click();
    cy.get('div').contains('Test task').should('exist');
    cy.get('button').contains('Delete').click();
    cy.get('div').contains('Test task').should('not.exist');
  })

  it('check mark and count', () => {
    cy.visit('http://localhost:3000/Todo_app');
    cy.get('span').contains('0 items left').should('exist');
    cy.get('div').contains('Test task').should('not.exist');
    cy.get('input').should('exist');
    cy.get('input').type('Test task');
    cy.get('button').contains('Add').click();
    cy.get('span').contains('1 items left').should('exist');
    cy.get('div').contains('Test task').should('exist');
    cy.get('input[type=checkbox]').should('not.be.checked');
    cy.get('input[type=checkbox]').click();
    cy.get('input[type=checkbox]').should('be.checked');
    cy.get('span').contains('0 items left').should('exist');
  })

  it('check buttons in menu', () => {
    cy.visit('http://localhost:3000/Todo_app');
    cy.get('div').contains('Test task1').should('not.exist');
    cy.get('input').should('exist');
    cy.get('input').type('Test task1');
    cy.get('button').contains('Add').click();
    cy.get('div').contains('Test task1').should('exist');
    cy.get('input[type=checkbox]').should('not.be.checked');
    cy.get('input[type=checkbox]').click();
    cy.get('input[type=checkbox]').should('be.checked');
    cy.get('span').contains('0 items left').should('exist');
    cy.get('input[type=text]').type('Test task2');
    cy.get('button').contains('Add').click();
    cy.get('div').contains('Test task2').should('exist');
    cy.get('button').contains('Active').click();
    cy.get('div').contains('Test task2').should('exist');
    cy.get('div').contains('Test task1').should('not.exist');
    cy.get('button').contains('Completed').click();
    cy.get('div').contains('Test task2').should('not.exist');
    cy.get('div').contains('Test task1').should('exist');
    cy.get('button').contains('All').click();
    cy.get('div').contains('Test task2').should('exist');
    cy.get('div').contains('Test task1').should('exist');
    cy.get('button').contains('Clear completed').click();
    cy.get('div').contains('Test task2').should('exist');
    cy.get('div').contains('Test task1').should('not.exist');
  })
});