import { createContext, useContext } from "react";
import { MyLib1Config, run1 } from "./exportAsNamespace.cjs-styles";
import { MyLib2Config, run2 } from "./exportAsNamespace.es-styles";

const esContext = createContext(undefined);
useContext(esContext);

const esConfig1: MyLib1Config = { var1: 2, var2: "b" };
run1(esConfig1);

const esConfig2: MyLib2Config = { var1: 2, var2: "b" };
run2(esConfig2);
