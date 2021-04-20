# Weather App <img src="/public/weather.jfif" width="40">


Main functionalities: 

1. List temperature of Munich, DE
2. Select metric unit between Celsius or Fahrenheit
3. Scroll through a list of days
4. Select a specific day to see the temperature chart

### Screenshots

<img src="/public/main.png" width="500">

### Demo

  Check out a live demo on this [link](https://weatherapp-virid.vercel.app/).

## Running the project

First, download the project:

- Clone the project:
```
$ git clone https://github.com/jordanboaz/weatherapp.git
```

Then, install the dependencies:


```bash
npm install
# or
yarn
```

Finally,, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## APIs

- The API [OpenWeatherMap](https://openweathermap.org/) was used to fetch temperature data from Munich.

## Tech and libraries

### React

- On version `17.0.2`. React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.

### TypeScript

- The app is build using [Typescript](https://www.typescriptlang.org/), it grants bring static typing for javascript, granting us the ability to use the intelisense for our code editor, facilitates the refactoring of code, saves us debuging time and brings more assertiveness when accessing properties of our variables.
- Interfaces were created with payload responsed from the API, so the whole application is aware of it's data structure.

### NextJS

- NextJS is a framework built on top of React that is fast and efficient. 

### Main libs:

- [axios](https://github.com/axios/axios) for api access.
- [reduxjs toolkit](https://redux-toolkit.js.org/) for simple state management of the application.
- [styled-components](https://styled-components.com/) to simplify separation between code and stylesheets.
- [react-icons](https://react-icons.github.io/react-icons/) a popular source of common icons for react.
- [nivo](https://nivo.rocks/components) to create beautiful charts.

### Code quality

To ensure the code follow the some pattern and is correctly typed, some libs were used:

- [prettier](https://prettier.io/) for code formatting.

### Patterns

#### Componentization of reusable code

UI components, like buttons, lists were created to avoid code duplication. The components were create to be completely reusable and they do not contain any business logic.

#### Separation of concerns

- A service layer was created and acts as bridge between layers.
- The redux connects the outworld, the API and our visual layers.




