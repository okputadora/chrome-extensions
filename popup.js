let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log(chrome);
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.querySelectorAll('[data-testid="dock-gateway"]')
              .forEach(function(element){
                element.remove()
              });
          document.getElementById("app").firstChild.style.overflow = "scroll";
          document.getElementById("app").firstChild.firstChild.style.overflow = "scroll"`
    });
  });
};
