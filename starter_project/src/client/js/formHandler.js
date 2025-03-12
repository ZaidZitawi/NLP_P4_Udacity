// Import the checkURL function from nameChecker.js
import { checkURL } from './nameChecker';

// Set the server URL for local development.
const serverURL = 'http://localhost:8000/analyze-url';

// Get the form element by its id ("urlForm")
const form = document.getElementById('urlForm');

// If the form exists, attach a submit event listener.
// This prevents errors when testing (if no form exists in test environment).
if (form) {
  form.addEventListener('submit', handleSubmit);
}

// This function is called when the form is submitted.
function handleSubmit(event) {
  // Stop the form from reloading the page.
  event.preventDefault();

  // Get the text from the input with id "name".
  const formText = document.getElementById('name').value;

  // Check if the input is a valid URL.
  if (checkURL(formText)) {
    console.log("URL is valid, proceeding with server call...");

    // Send the URL to the server using the postData function.
    postData(serverURL, { url: formText })
      .then((response) => {
        console.log("Response from server:", response);

        // Update the results area with the data from the server.
        document.getElementById('results').innerHTML = `
          <p><strong>Sentiment:</strong> ${response.sentiment || 'N/A'}</p>
          <p><strong>Sentiment Scores:</strong></p>
          <ul>
            <li><strong>Positive:</strong> ${response.sentiment_scores && response.sentiment_scores.Positive ? response.sentiment_scores.Positive : 'N/A'}</li>
            <li><strong>Neutral:</strong> ${response.sentiment_scores && response.sentiment_scores.Neutral ? response.sentiment_scores.Neutral : 'N/A'}</li>
            <li><strong>Negative:</strong> ${response.sentiment_scores && response.sentiment_scores.Negative ? response.sentiment_scores.Negative : 'N/A'}</li>
            <li><strong>Mixed:</strong> ${response.sentiment_scores && response.sentiment_scores.Mixed ? response.sentiment_scores.Mixed : 'N/A'}</li>
          </ul>
          <p><strong>Text:</strong> ${response.text || 'N/A'}</p>
        `;
      })
      .catch((error) => {
        console.error("Error from server:", error);
      });
  } else {
    // If the URL is not valid, show an alert.
    alert('Please enter a valid URL!');
  }
}

// This helper function sends data to the server using fetch.
async function postData(url = '', data = {}) {
  console.log("Sending data to server:", data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  try {
    // Convert the response to JSON.
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("Error parsing JSON:", error);
    throw error;
  }
}

// Export the handleSubmit function so it can be used in tests.
export { handleSubmit };
