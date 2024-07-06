/// <reference types="cypress" />
import Data from "../../support/data";

describe("Book a room", { tags: ["@api", "@usual"] }, () => {
  it("Book a new room", () => {
    cy.openHomePage(Data.laptopView);

    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/booking",
      form: true,
      body: {
        firstname: Data.name,
        lastname: Data.lastName,
        totalprice: Data.randomPrice,
        depositpaid: true,
        bookingdates: {
          checkin: Data.todayDate,
          checkout: Data.futureDate,
        },
        additionalneeds: "Breakfast",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.booking.firstname).to.eq(Data.name);

      expect(resp.body.booking.lastname).to.eq(Data.lastName);

      cy.log("------------------------");

      cy.log("Booking info:");

      cy.log("------------------------");

      cy.log("Booking ID: " + resp.body.bookingid);

      cy.log("First name: " + resp.body.booking.firstname);

      cy.log("Last Name: " + resp.body.booking.lastname);

      cy.log("Today date: " + Data.todayDate);

      cy.log("Future date: " + Data.futureDate);

      cy.log("------------------------");

      let bookingID = resp.body.bookingid.toString();

      cy.request(
        "GET",
        "https://restful-booker.herokuapp.com/booking/" + bookingID
      ).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(Data.name).to.equal(resp.body.firstname);

        expect(Data.lastName).to.equal(resp.body.lastname);

        cy.log("------------------------");

        cy.log("Booking ID info:");

        cy.log("------------------------");

        cy.log("First Name: " + resp.body.firstname);

        cy.log("Last Name: " + resp.body.lastname);

        cy.log("------------------------");
      });
    });
  });
});
