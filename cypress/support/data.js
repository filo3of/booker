import { faker } from "@faker-js/faker";
import moment from "moment";

// Setup Faker to use different language
faker.locale = "es_MX";

// Setup Moment to use Canada time format
moment.locale("en-ca");

class Data {
  // Faker initialization
  faker = faker;

  // Device in which view we are running our tests
  laptopView = "macbook-15";

  name = faker.name.firstName();
  lastName = faker.name.lastName();
  randomPrice = faker.datatype.number({ min: 100, max: 900 });
  email = faker.internet.email();
  subject = faker.random.words(2);
  message = faker.lorem.sentences(2);
  phoneNumber = faker.phone.number("+387 66 ### ###");

  // Use unix time stamp to generate unique email address
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  // realEmail = "qa.test+" + this.getUnixTimeStamp() + "@gmail.com";

  todayDate = moment().format("L").toString();

  futureDate = moment().add(20, "days").format("L").toString();

  vacationDays(days) {
    let futureDate = moment().add(days, "days").format("L").toString();

    return futureDate;
  }
}

export default new Data();
