# Evaluate a News Article with Natural Language Processing

## Project Overview
This project is a web application that allows users to analyze the sentiment and classification of news articles using Natural Language Processing (NLP). It utilizes a backend server to scrape text from a provided URL and sends the extracted content to the Udacity NLP API for analysis. The results are then displayed dynamically on the frontend.

## Table of Contents
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Testing](#testing)
- [Offline Functionality](#offline-functionality)
- [Deployment](#deployment)
- [License](#license)

## Features
- Users can enter a URL to analyze the content of an article.
- Backend extracts the article text and sends the first 200 characters to the NLP API.
- Displays the sentiment analysis and classification of the article.
- Includes validation to ensure a valid URL is provided.
- Offline functionality using service workers.
- Unit testing implemented using Jest.

## Project Architecture
The project follows a structured architecture as follows:
```
├── src/
│   ├── client/
│   │   ├── js/
│   │   │   ├── formHandler.js
│   │   │   ├── apiRequest.js
│   │   ├── styles/
│   │   │   ├── main.scss
│   │   ├── views/
│   │   │   ├── index.html
│   ├── server/
│   │   ├── index.js
│   │   ├── api.js
│   ├── __test__/
│   │   ├── testFormHandler.spec.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
├── README.md
├── .gitignore
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ZaidZitawi/NLP_P4_Udacity.git
   cd news-nlp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Build for production:
   ```sh
   npm run build
   ```
6. Start the server:
   ```sh
   npm start
   ```

## Usage
1. Open the application in your browser at `http://localhost:8080`.
2. Enter a valid news article URL in the input field.
3. Click "Submit" to analyze the article.
4. View the sentiment and classification results on the page.

## API Integration
- The backend scrapes text from the provided URL using `Cheerio`.
- The first 200 characters are sent to the Udacity NLP API.
- The API response includes sentiment analysis and classification.
- The frontend dynamically updates to display the results.

## Testing
- Jest is used for unit testing.
- To run tests:
  ```sh
  npm run test
  ```
- Each `src/client/js` file has at least one test.
- Tests check function correctness and error handling.

## Offline Functionality
- Service workers are implemented using Workbox.
- The site remains available even when offline.
- Configured in `webpack.prod.js`.

## Deployment
- The project can be deployed using services like Netlify or Heroku.
- Example deployment steps for Heroku:
  ```sh
  heroku create
  git push heroku main
  ```
- Ensure environment variables are set up on the deployment platform.


