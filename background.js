chrome.action.onClicked.addListener(async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const query = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => document.getSelection().toString()
    });
  
    // Replace 'YOUR_API_KEY' with your actual Gemini API key
    const response = await fetch('https://api.gemini.com/v1/generate', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer APIKEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: query[0].result
      })
    });
  
    const data = await response.json();
    console.log(data); // You can display this in the popup or use it for other actions
  });