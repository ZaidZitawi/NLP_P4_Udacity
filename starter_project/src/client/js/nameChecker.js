// This function checks if the input text is a valid URL.
// We use a regular expression to test the URL format.
function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);
  
    // This regex is simple and may not cover all cases.
    const urlRegex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|\d{1,3}(\.\d{1,3}){3})(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[\-a-z\d_]*)?$/i;
  
    // Return true if the URL is valid, false if not.
    return urlRegex.test(inputText);
  }
  

  export { checkURL };
  