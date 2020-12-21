# Overview

This application is a simple app meant to translate integers into roman numerals
For example, if the input is "5", then the output is "V" since this is the equivalent in roman numerals.

# Requirements

The HTTP endpoint needs to accept the URI with an integer up to 2,200,000,000.
Handles errors for numbers larger than the maximum requirement or invalid input in the backend and front end.

# Set up

2 ways:

- Fork this project and pull it down on your local machine. Run `npm install` and then run `npm run start-dev`. You should be able to access the app in http://localhost:8080/

- Pull down the created image of this app in docker https://hub.docker.com/repository/docker/vicoli28/roman-app/general then run
  `docker run -p 49160:8080 -d vicoli28/roman-app`. The app should be available in http://0.0.0.0:49160/.

# Caching

To improve the efficiency of this project, we are caching the results that the user requests so that if one of the input has already been cached, we will not need to run through the algorithm again. This caching method is used in the backed using `node-cache`. This is a slight performance improvement since the algorithm is not that heavy.

# API Routes

There is only a single api route available in this project and that is a `POST` route to `/ajax/integer_input`. While we are not posting anything in a database (there are no databases in this project.), it is best practice to make all form submission a post request. This api endpoint maps to a custom controller called `romanNumeralsAction`.

# Error handling

There are mainly two types of errors that can occur:

- Invalid input i.e `ewlfjewkjf` which does not have a roman numeral equivalent. We will throw an error from the controller that the axios request will catch to display the custom message for the user.
- High value input i.e `3908209480238402938402` which our algorithm cannot handle. We will throw an error from the controller that the axios request will catch to display the custom message for the user.
- NOTE: The user can also change the url to request routes that do not exist i.e `/whatever/whatsup`, instead of displaying a 404 page,
  the design of this front end app handles this as a "valid url" and will just ignore it by rendering the homepage. https://github.com/vli8/roman-app/blob/master/app/client/index.js#L10

# Testing

In this project there are two types of tests:

- Unit tests: using mocha, we are testing the single functionality of routes, controllers, and components. Run `npm run test` to run all test suites
- End to end testing: Using cypress we have integrated end to end testing flows to check all possible scenarios. To run this end to end testing, we need to first start up the server by running `npm run start-dev`, in another terminal please run `npm run cypress` a window with the the App test suite will appear.
- Note that end to end testing is not supported yet if docker is running. That is because it would run on a different port and I have hardcoded the base url in the cypress.json. To configure around it, we have to add an argument to the `npm run cypress` and dynamically change ports based on the environment.
