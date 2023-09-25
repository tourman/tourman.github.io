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
  function showError(error) {
    div.style = styleToString({ ...style, background: "red" });
    div.innerHTML = String(error);
  }
  fetch("https://httpbin.org/post", {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(style),
  }).then(
    (response) =>
      response
        .json()
        .then(
          ({ data }) =>
            (div.innerHTML = `<pre style="margin: 0">${data}</pre>`),
          showError
        ),
    showError
  );
})();
