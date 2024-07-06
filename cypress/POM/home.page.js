class HomePage {
  openHomePage(device) {
    cy.viewport(device);

    cy.visit("/");

    cy.url().should("eq", "https://automationintesting.online/");

    // When we open this page for the first time there is a button which needs to be removed

    cy.get("button").contains("Let me hack!").should("be.visible").click();

    cy.get(".hotel-logoUrl").should("be.visible");

    return this;
  }

  enterName(name) {
    cy.get("#name").should("be.visible").type(name).should("have.value", name);

    return this;
  }

  enterEmail(email) {
    cy.get("#email")
      .should("be.visible")
      .type(email)
      .should("have.value", email);

    return this;
  }

  enterPhone(phone) {
    cy.get("#phone")
      .should("be.visible")
      .type(phone)
      .should("have.value", phone);

    return this;
  }

  enterSubject(subject) {
    cy.get("#subject")
      .should("be.visible")
      .type(subject)
      .should("have.value", subject);

    return this;
  }

  enterMessage(message) {
    cy.get("#description")
      .should("be.visible")
      .type(message)
      .should("have.value", message);

    return this;
  }

  clickSubmit_message() {
    cy.get("#submitContact").should("be.visible").click();

    return this;
  }

  verify_that_message_is_sent(name, subject) {
    cy.get("h2").contains("Thanks for getting in touch ").should("be.visible");

    cy.get("h2").contains(name).should("be.visible");

    cy.get("p").contains(subject).should("be.visible");
    return this;
  }
}

export default new HomePage();
