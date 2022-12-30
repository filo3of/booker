/// <reference types="cypress" />

import Data from "../support/data";

describe("Send a message", { tags: "@usual" }, () => {
  it("Send a new message", () => {
    cy.openHomePage(Data.laptopView);

    cy.get("#name")
      .should("be.visible")
      .type(Data.name)
      .should("have.value", Data.name);

    cy.get("#email")
      .should("be.visible")
      .type(Data.email)
      .should("have.value", Data.email);

    cy.get("#phone")
      .should("be.visible")
      .type(Data.phoneNumber)
      .should("have.value", Data.phoneNumber);

    cy.get("#subject")
      .should("be.visible")
      .type(Data.subject)
      .should("have.value", Data.subject);

    cy.get("[data-testid='ContactDescription']")
      .should("be.visible")
      .type(Data.message)
      .should("have.value", Data.message);

    cy.get("#submitContact")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#submitContact").should("not.exist");

        cy.get("h2")
          .contains("Thanks for getting in touch ")
          .should("be.visible");

        cy.get("h2").contains(Data.name).should("be.visible");

        cy.get("p").contains(Data.subject).should("be.visible");
      });
  });
});
