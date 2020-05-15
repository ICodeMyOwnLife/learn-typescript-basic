const myWidget1 = new window.MyWidget("");
myWidget1.onComplete = () => console.log("Completed");

const myWidget2 = new MyWidget("#root");
myWidget2.onError = e => console.log(e.message);

window.addEventListener("networkFailed", ({ detail: { message, status } }) => {
  console.log(message, status);
});

window.addEventListener("networkSuccess", ({ detail: { message, status } }) => {
  console.log(message, status);
});

const card = document.createElement("card");
card.render("LOGIN", "Are you sure to login?");
card.unmount();
