import template from "./index.html";
import classes from "./styles.module.scss";

__WEBPACK_PUBLIC_PATH__ = "//abc.com";

__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(console.log, alert)("Hello");

setInterval(() => {
  ++_zid;
}, 1000);

const run = async () => {
  const res = await request({
    url: "//api.abc.com",
    method: RequestMethod.GET,
    dataType: RequestDataType.BLOB,
  });
  const data = await res.json();
  console.log(data);
};

run();

const widget1 = new AwesomeWidget("#root", template);
widget1.classes.root = classes.root;
widget1.classes.heading = classes.heading;
widget1.classes.content = classes.content;
widget1.mount();
setTimeout(() => widget1.unmount(), 2000);

const widgets = AwesomeWidget.getAllWidgets();
widgets.forEach(({ name }) => console.log(name));
