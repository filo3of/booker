/// <reference types="cypress" />

describe("Book a room", { tags: "@usual" }, () => {
  it("Book a new room", () => {
    cy.viewport("macbook-16");

    cy.visit("/");

    cy.get(".hotel-logoUrl").should("be.visible");

    cy.url("eq", "https://automationintesting.online/");

    cy.get("button").contains("Let me hack!").click();

    cy.get("button")
      .contains("Book this room")
      .first()
      .scrollIntoView()
      .click();

    cy.get("button").contains("Cancel").should("be.visible");

    cy.get("div[class='rbc-date-cell rbc-now rbc-current']")
      .find("button")
      .invoke("text")
      .then((date) => {
        // TO DO
        // if the date > 28 change month and select e.g. 01,02...
        // else date + 1

        let dateNumber = +date;

        let finalDateNumber = dateNumber + 1;

        let finalDateString = finalDateNumber.toString();

        cy.log("--------------------");

        cy.log(dateNumber);

        cy.log(finalDateNumber);

        cy.log(finalDateString);

        cy.log("--------------------");

        cy.get("button")
          .contains(finalDateString)
          .last()
          .drag("div[class='rbc-day-bg rbc-today']", { force: true });
      });
  });
});
