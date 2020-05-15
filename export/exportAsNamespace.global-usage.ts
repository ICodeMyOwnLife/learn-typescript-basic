const globalContext = React.createContext(undefined);
React.useContext(globalContext);

const globalConfig1: MyLib1.MyLib1Config = { var1: 2, var2: "b" };
MyLib1.run1(globalConfig1);

const globalConfig2: MyLib2.MyLib2Config = { var1: 2, var2: "b" };
MyLib2.run2(globalConfig2);
