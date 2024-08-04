## Description

CountryApi is a service for fetching country-related data using various filters and criteria. This service interacts with an external API through the ServiceFetchersService to retrieve information about countries based on different parameters.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

The CountryApi includes a comprehensive test suite to ensure reliability and correctness. The tests cover various aspects of the service methods, including:

Validation: Ensures that inputs are correctly validated and that errors are properly handled.
Error Handling: Verifies that the service correctly throws and handles exceptions.
API Integration: Tests interactions with the ServiceFetchersService and checks responses from the API.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Features

- Fetch All Countries: Retrieve a list of all countries.
- Fetch Country by Name: Retrieve country details by country name.
- Fetch Country by Code: Retrieve country details by country code.
- Fetch Country by Full Name: Retrieve country details by full name.
- Fetch Country by Region: Retrieve countries within a specific region.
- Fetch Country by Subregion: Retrieve countries within a specific subregion.
- Fetch Country by Capital: Retrieve country details by capital city.
- Fetch Country by Currency: Retrieve countries using a specific currency.
- Fetch Country by Language: Retrieve countries where a specific language is spoken.

## Dependencies

- @nestjs/common: Provides decorators and utilities for creating NestJS services.
- ServiceFetchersService: Service responsible for fetching country data from an external API.
- ResponseInterceptor: Interceptor for formatting responses.
- GetCountrySchemaByName: Zod schema for validating country name input.
- readZodInputError: Function for handling Zod validation errors.
- swagger: Used for generating and serving API documentation.

## Error Handling

- Zod Validation Errors: Handled by the readZodInputError function.
- General Errors: Rejected with appropriate error messages.

## Interceptors

- ResponseInterceptor: Applies response formatting to all service methods.

## Stay in touch

- Author - [Akintunde Akinsanmi](https://www.linkedin.com/in/akintunde-akinsanmi/)

## License

Nest is [MIT licensed](LICENSE).
