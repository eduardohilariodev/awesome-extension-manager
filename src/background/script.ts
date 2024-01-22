chrome.tabs.onCreated.addListener((tab) => {
  console.group("onCreated");
  console.log("Tab created", tab);
  console.log("Tab id", tab.id);
  console.groupEnd();
});
