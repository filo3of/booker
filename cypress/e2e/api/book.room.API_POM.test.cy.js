import Booker from "../../support/utility_functions";
import Data from "../../support/data";

describe("Book a room using API", { tags: ["@api", "@pom", "@smoke"] }, () => {
  it("Book a room using function from a utility class", () => {
    cy.openHomePage(Data.laptopView);

    Booker.book_room_API(Data.name, Data.lastName, 7);
  });
});
