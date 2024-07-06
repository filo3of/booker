/// <reference types="cypress" />

import Data from "../support/data";
import HomePage from "../POM/home.page";

describe("Send 5 messages", { tags: ["@pom", "smoke"] }, () => {
  for (let i = 0; i < 5; i++) {
    it("Send a new message", () => {
      // cy.openHomePage(Data.laptopView);

      HomePage.openHomePage(Data.laptopView)
        .enterName(Data.name)
        .enterEmail(Data.faker.internet.email())
        .enterPhone(Data.faker.phone.number("+387 66 ### ###"))
        .enterSubject(Data.subject)
        .enterMessage(Data.faker.lorem.sentences(2))
        .clickSubmit_message()
        .verify_that_message_is_sent(Data.name, Data.subject);
    });
  }
});
