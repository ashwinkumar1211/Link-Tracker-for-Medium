//skeleton for onmessage addlistener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.href) {
      console.log("Link clicked:", message.href);      
    }
  });
  