import { faker } from "@faker-js/faker";

// Setup Faker to use English/United States
faker.locale = "es_MX";

class Data {
  // Faker initialization
  faker = faker;

  // Device in which view we are running our tests
  device = "macbook-15";

  name = faker.name.firstName();

  email = faker.internet.email();

  // realEmail = "qa.qs.test+" + +"@gmail.com";

  subject = "Hello";

  message = faker.lorem.sentences(2);

  phone = faker.phone.number("+387 6# ### ###");
}

export default new Data();
