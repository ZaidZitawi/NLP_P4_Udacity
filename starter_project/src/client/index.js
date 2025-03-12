// Import SCSS files for styling.
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

// Import the handleSubmit function from formHandler.js.
import { handleSubmit } from './js/formHandler';

// Wait until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  // Find the form with id "urlForm".
  const form = document.getElementById('urlForm');

  // If the form exists, add a submit event listener.
  if (form) {
    form.addEventListener('submit', handleSubmit);
  } else {
   
    console.error('Form element with id "urlForm" not found');
  }
});
