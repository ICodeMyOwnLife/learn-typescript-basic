const myWidget1 = new window.MyWidget("");
myWidget1.onComplete = () => console.log("Completed");

const myWidget2 = new MyWidget("#root");
myWidget2.onError = (e) => console.log(e.message);
