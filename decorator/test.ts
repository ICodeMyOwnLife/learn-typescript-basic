import ReflectMetadata from "./ReflectMetadata";
// import ts from 'typescript';
import nameof from 'ts-nameof';

class TestClass { }

function TestFunction(_p1: string, _p2: TestClass) {
  return 5;
}

const t = ReflectMetadata.getType(TestFunction);
const pt = ReflectMetadata.getParamTypes(TestFunction);
const rt = ReflectMetadata.getReturnType(TestFunction);
console.log(t, pt, rt);

const a = nameof()(TestClass);
console.log(a);
