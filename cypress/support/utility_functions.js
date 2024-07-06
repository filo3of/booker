import Data from "../support/data";

class Booker {
  book_room_API(firstName, lastName, days) {
    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/booking",
      form: true,
      body: {
        firstname: firstName,
        lastname: lastName,
        totalprice: Data.randomPrice,
        depositpaid: true,
        bookingdates: {
          checkin: Data.todayDate,
          checkout: Data.vacationDays(days),
        },
        additionalneeds: "Breakfast",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.booking.firstname).to.eq(firstName);

      expect(resp.body.booking.lastname).to.eq(lastName);

      let bookingID = resp.body.bookingid.toString();

      cy.request(
        "GET",
        "https://restful-booker.herokuapp.com/booking/" + bookingID
      ).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(firstName).to.equal(resp.body.firstname);

        expect(lastName).to.equal(resp.body.lastname);
      });
    });
  }
}

export default new Booker();
