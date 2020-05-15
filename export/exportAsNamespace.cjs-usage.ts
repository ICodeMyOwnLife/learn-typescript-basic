import React = require("react");
import MyLib1 = require("./exportAsNamespace.cjs-styles");
import MyLib2 = require("./exportAsNamespace.es-styles");

const cjsContext = React.createContext(undefined);
React.useContext(cjsContext);

const cjsConfig1: MyLib1.MyLib1Config = { var1: 2, var2: "b" };
MyLib1.run1(cjsConfig1);

const cjsConfig2: MyLib2.MyLib2Config = { var1: 2, var2: "b" };
MyLib2.run2(cjsConfig2);
