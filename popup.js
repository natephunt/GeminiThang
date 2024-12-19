document.getElementById('queryButton').addEventListener('click', () => {
  // You can add a loading indicator here
  chrome.runtime.sendMessage({ action: 'query' });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'query') {
    // Handle the response from the background script and display it in the popup
    document.getElementById('result').textContent = 'Querying Gemini...';
    // ... (update the result element with the actual response)
  }
});