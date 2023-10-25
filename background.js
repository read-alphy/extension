chrome.runtime.sendMessage({ type: "GET_USER_STATUS" }, function(response) {
    if (response.status === "LOGGED_IN") {
      // Continue with your existing content script logic
    } else {
      // Maybe don't inject or do anything since the user is not authenticated
    }
  });
  


  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "GET_USER_STATUS") {
      // Here, you'd check Firebase or wherever you're storing the status.
      sendResponse({ status: "LOGGED_IN" }); // or LOGGED_OUT, etc.
    }
  });
  