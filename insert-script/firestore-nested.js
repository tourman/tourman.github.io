import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const config =
  "U2FsdGVkX18m3g8wVxtMLjydR4V3TvUbmqx1aqbl4249jQBbNdv059Fxr5purrk5xSP3W8kkTI9TRRemuTws5nTr7efbDIVGyMDus+CRx1VmtVx7UwmZoYHk1AA8L2A4HOPZXjpAddSw66jQaa+0e8vR8vFI5y8f3tUek1CvEZzbEQeVTKn1HgEqEowVGsiQ72D60jGk0TUDOa50eh3yrr5YiU4v/6dbydX8mRYACseNk0fhnuD8N0KnPVhe00pyZ0n/qOSLjZiW/hHGiku/Cj8ab8TE95X/7mlkMdbOJ7tO4XN+QoLRE+LY5QrpxKlUBi+j5X9eihgSHLSfG6E97Dcr91jYmHRDtrVlBbh2yggNscAuYN15BexLchJd4+L7";

async function initAES({ pass }) {
  const result = await fetch(
    "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js",
    { method: "GET" }
  );
  const js = await result.text();
  eval?.(js);
  return {
    encrypt: (message) => CryptoJS.AES.encrypt(message, pass).toString(),
    decrypt: (message) =>
      CryptoJS.AES.decrypt(message, pass).toString(CryptoJS.enc.Utf8),
  };
}

(async () => {
  const payloadPromise = new Promise((resolve) => {
    function handler(e) {
      resolve(JSON.parse(e.data));
      window.removeEventListener("message", handler);
    }
    window.addEventListener("message", handler);
  });
  window.parent.postMessage("ready", "*");
  const { html, href, pass } = await payloadPromise;
  const { decrypt } = await initAES({ pass });
  const firebaseConfig = JSON.parse(decrypt(config));
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  await setDoc(
    doc(db, "bs", JSON.stringify(href.replace(/^https?:\/\//, "").split("/"))),
    {
      html,
      added: new Date().toISOString(),
    }
  );
})();
