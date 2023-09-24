(() => {
  const div = document.createElement("div");
  const style = {
    height: "50px",
    background: "orange",
    "line-height": "50px",
    "text-align": "center",
    margin: 0,
    padding: 0,
    width: "100%",
    overflow: "auto",
  };
  function styleToString(styleObj) {
    return Object.entries(styleObj)
      .map(([key, value]) => `${key}: ${value}`)
      .join("; ");
  }
  div.style = styleToString(style);
  div.innerHTML = "This is the script";
  document.body.prepend(div);
  fetch("https://postman-echo.com/post", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(style),
  }).then(
    (response) => {
      console.log("response", response);
      div.innerHTML = "Got response!";
    },
    (error) => {
      div.style = styleToString({ ...style, background: "red" });
      div.innerHTML = String(error);
    }
  );
})();
