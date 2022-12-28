/// <reference types="cypress" />
import Data from "../support/data";

describe("Book a room", () => {
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
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      cy.log("------------------------");

      cy.log("Booking info:");

      cy.log("------------------------");

      cy.log("Booking ID: " + resp.body.bookingid);

      cy.log("First name: " + resp.body.booking.firstname);

      cy.log("Last Name: " + resp.body.booking.lastname);

      let bookingID = resp.body.bookingid.toString();

      cy.log("------------------------");

      //cy.wait(3000);

      cy.request(
        "GET",
        "https://restful-booker.herokuapp.com/booking/" + bookingID
      ).then((resp) => {
        // redirect status code is 302
        expect(resp.status).to.eq(200);

        cy.log("------------------------");

        cy.log("Booking ID info:");

        cy.log("------------------------");

        cy.log("First Name: " + resp.body.firstname);

        cy.log("Last Name: " + resp.body.lastname);

        cy.log("------------------------");

        expect(Data.name).to.equal(resp.body.firstname);
      });
    });
  });
});
