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
  async function proceed() {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(style),
    });
    const { data } = await response.json();
    div.innerHTML = `<pre style="margin: 0">${data}</pre>`;
  }
  proceed().catch(showError);
})();
