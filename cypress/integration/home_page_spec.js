describe('The Home Page', function(){
  it('Loads successfully', function(){
    cy.visit('/')
    cy.contains('Welcome to the James Bond Film Quiz App')
  })
})

describe('Question 1', function(){
  it('asks a question', function(){
    cy.visit('/')
    cy.contains("Let's start off easy. What was the first James Bond film ever made?")
    cy.contains('Dr No')
    cy.contains('From Russia With Love')
    cy.contains('Goldfinger')
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.contains('Dr No').click()
    cy.contains('Ok...well done')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.contains('Goldfinger').click()
    cy.contains('WRONG!')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.contains('From Russia With Love').click()
    cy.contains('WRONG!')
  })
})