let styleElement = null;

function injectCSS(colorBlindType) {
  // Remove existing styles first
  removeCSS();

  // Create new style element
  styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.type = "text/css";
  styleElement.href = chrome.runtime.getURL(`styles/${colorBlindType}.css`);
  styleElement.id = "accease-colorblind-css";

  document.head.appendChild(styleElement);
}

function removeCSS() {
  if (styleElement) {
    styleElement.remove();
    styleElement = null;
  }
  
  // Also remove by ID in case element reference is lost
  const existingStyle = document.getElementById("accease-colorblind-css");
  if (existingStyle) {
    existingStyle.remove();
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    if (message.action === "applyColorBlind") {
      if (message.type) {
        injectCSS(message.type);
        sendResponse({ success: true, type: message.type });
      } else {
        sendResponse({ success: false, error: "No color type specified" });
      }
    } else if (message.action === "removeColorBlind") {
      removeCSS();
      sendResponse({ success: true });
    }
    return true; // Keep the message channel open for async response
  } catch (error) {
    console.error("Error in content script:", error);
    sendResponse({ success: false, error: error.message });
    return true;
  }
});
