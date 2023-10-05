(async function main() {
  const initPromise = Promise.resolve();
  const messagePromise = initPromise.then(
    () =>
      new Promise((resolve) => {
        function handler(e) {
          if (e.data !== "ready") {
            return;
          }
          resolve();
          window.removeEventListener("message", handler);
        }
        window.addEventListener("message", handler);
      })
  );
  const resizePromise = messagePromise.then(
    () =>
      new Promise((resolve) => {
        function handler() {
          resolve();
          window.removeEventListener("resize", handler);
        }
        window.addEventListener("resize", handler);
      })
  );
  const html = document.body.innerHTML;
  const iframe = document.createElement("iframe");
  const src = import.meta.url.replace(
    "firestore-index.js",
    "firestore-nested.html"
  );
  iframe.setAttribute("src", src);
  iframe.setAttribute("style", "width: 0; height: 0; border: 0");
  document.body.appendChild(iframe);

  await resizePromise;
  iframe.contentWindow.postMessage(
    JSON.stringify({
      html,
      href: window.location.href,
      pass: window.pass,
    }),
    "*"
  );
})();
