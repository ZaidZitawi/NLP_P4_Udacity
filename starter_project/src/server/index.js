// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

// Create an Express app
const app = express();

// Use middleware to allow cross-origin requests and parse JSON
app.use(cors());
app.use(bodyParser.json());

// This function fetches and extracts text from a given URL.
// It returns the first 200 characters of the page's text.
async function scrapeTextFromURL(url) {
  try {
    console.log(`Fetching and scraping text from URL: ${url}`);

    // Get the HTML content of the page.
    const { data } = await axios.get(url);

    // Use Cheerio to load and parse the HTML.
    const $ = cheerio.load(data);
    const text = $('body').text().trim();

    // If no text is found, log an error.
    if (!text) {
      console.error('No text content found at the provided URL');
      return null;
    }

    // Return the first 200 characters of the text.
    const trimmedText = text.slice(0, 200);
    console.log(`Extracted Text (200 characters):\n${trimmedText}\n--- End of Text Preview ---`);
    return trimmedText;
  } catch (error) {
    console.error('Error while scraping text from the URL:', error.message);
    throw new Error('Failed to scrape text from the URL');
  }
}

// This route analyzes the text from a URL.
// It accepts a POST request with a JSON body that has a "url" property.
app.post('/analyze-url', async (req, res) => {
  const { url } = req.body;

  // If no URL is provided, send a 400 error.
  if (!url) {
    console.error('No URL provided in the request body');
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Scrape text from the given URL.
    const text = await scrapeTextFromURL(url);

    // If no text is found, send a 400 error.
    if (!text) {
      return res.status(400).json({ error: 'No text content found at the provided URL' });
    }

    // Send the text to the AWS NLP API.
    console.log('Sending extracted text to the NLP API...');
    const apiResponse = await axios.post(
      'https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer',
      { text }
    );

    // Log and send the API response back to the client.
    console.log('Received NLP API response:', apiResponse.data);
    return res.json(apiResponse.data);
  } catch (error) {
    console.error('Error during URL processing or API request:', error.message);
    return res.status(500).json({ error: 'Failed to analyze the URL' });
  }
});

// Default route for the server.
app.get('/', (req, res) => {
  res.send("This is the server API page. You may access its services via the client app.");
});

// Start the server on port 8000.
app.listen(8000, () => {
  console.log('Server running on port 8000');
});
