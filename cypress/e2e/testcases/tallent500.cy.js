/// <reference types="cypress" />
describe("https://talent500.co/ , Login & Logout ", () => {
  it("Logs in successfully and verifies links in header", () => {
    cy.visit("https://talent500.co/auth/signin");
    cy.get('[name="email"]').focus();
    cy.get('[name="email"]').type("applitoolsautomation@yopmail.com");
    cy.get('[name="password"]').focus();
    cy.get('[name="password"]').type("Test@123");
    cy.get('[type="submit"]').eq(1).click({ force: true });
    cy.contains("PROFILE").should("be.visible");
    cy.get('img[alt="DropDown Button"]').click({ force: true });
    cy.contains("Logout").click();
    cy.contains("Opportunities favor the bold").should("be.visible");
  });
});
