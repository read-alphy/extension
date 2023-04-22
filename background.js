// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (
//     changeInfo.status === "complete" &&
//     /^https?:\/\/(www\.)?(youtube\.com\/watch|twitter\.com\/i\/spaces)/.test(
//       tab.url
//     )
//   ) {
//     chrome.tabs.sendMessage(tabId, { type: "urlChanged", url: tab.url });
//   }
// });
