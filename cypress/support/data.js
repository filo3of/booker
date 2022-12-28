import { Faker, faker } from "@faker-js/faker";

// Setup Faker to use different language
faker.locale = "es_MX";

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
  message = faker.lorem.text();
  phoneNumber = faker.phone.number("+387 66 ### ###");

  // realEmail = "qa.test+" + +"@gmail.com";
}

export default new Data();
