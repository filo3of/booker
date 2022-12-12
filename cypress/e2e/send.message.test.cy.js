import HomePage from "../POM/page/home.page";
import Data from "../support/data";

describe("Send a message", { tags: "@smoke" }, () => {
  it("Check room availability", () => {
    HomePage.openHomePage(Data.device)
      .enterName(Data.name)
      .enterEmail(Data.email)
      .enterPhone(Data.phone)
      .enterSubject(Data.subject)
      .enterMessage(Data.message)
      .verify_that_message_is_sent();
  });

  it("Send message without name", () => {
    HomePage.openHomePage(Data.device)
      .enterEmail(Data.email)
      .enterPhone(Data.phone)
      .enterSubject(Data.subject)
      .enterMessage(Data.message)
      .verify_that_message_is_sent();
  });
});
