const htmlInput = document.querySelector("#html-input");
const cssInput = document.querySelector("#css-input");
const jsInput = document.querySelector("#js-input");
const runButton = document.querySelector("#run-button");
const saveButton = document.querySelector("#save-button");
const loadButton = document.querySelector("#load-button");
const outputIframe = document.querySelector("#output-iframe").contentWindow.document;

// Load saved code from local storage
if (localStorage.getItem("savedHtml")) {
  htmlInput.value = localStorage.getItem("savedHtml");
}
if (localStorage.getItem("savedCss")) {
  cssInput.value = localStorage.getItem("savedCss");
}
if (localStorage.getItem("savedJs")) {
  jsInput.value = localStorage.getItem("savedJs");
}

// Save code to local storage
saveButton.addEventListener("click", () => {
  localStorage.setItem("savedHtml", htmlInput.value);
  localStorage.setItem("savedCss", cssInput.value);
  localStorage.setItem("savedJs", jsInput.value);
});

// Run code
runButton.addEventListener("click", () => {
  outputIframe.open();
  outputIframe.writeln(`
    <html>
      <head>
        <style>
          ${cssInput.value}
        </style>
      </head>
      <body>
        ${htmlInput.value}
        <script>
          ${jsInput.value}
        </script>
      </body>
    </html>
  `);
  outputIframe.close();
});

// Load code from local storage
loadButton.addEventListener("click", () => {
  if (localStorage.getItem("savedHtml")) {
    htmlInput.value = localStorage.getItem("savedHtml");
  }
  if (localStorage.getItem("savedCss")) {
    cssInput.value = localStorage.getItem("savedCss");
  }
  if (localStorage.getItem("savedJs")) {
    jsInput.value = localStorage.getItem("savedJs");
  }
});
