class Circle {
  readonly kind = "circle";
  constructor(readonly radius: number) {}
}

class Rectangle {
  readonly kind = "rectangle";
  constructor(readonly width: number, readonly height: number) {}
}

class Square {
  readonly kind = "square";
  constructor(readonly size: number) {}
}

type Shape = Circle | Rectangle | Square;

type ShapeKind = Shape["kind"];

type ShapeColor = "red" | "blue" | "green";

const unsupportedValueErrorMessage = (x: any) => `Unsupported value: ${x}`;

class UnsupportedValueError extends Error {
  constructor(x: never) {
    super(unsupportedValueErrorMessage(x));
  }
}

const checkNever = <TValue = never>(x: never, defaultValue: TValue): TValue => {
  console.error(unsupportedValueErrorMessage(x));
  return defaultValue;
};

const calculateArea1 = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;

    case "rectangle":
      return shape.width * shape.height;

    case "square":
      return shape.size * shape.size;

    default:
      throw new UnsupportedValueError(shape);
  }
};

const calculateArea2 = (shape: Shape): number => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;

    case "rectangle":
      return shape.width * shape.height;

    case "square":
      return shape.size * shape.size;

    default:
      return checkNever(shape, 0);
  }
};

const shapeKindColorMap: Record<ShapeKind, ShapeColor> = {
  circle: "blue",
  rectangle: "green",
  square: "red"
};

const getShapeColor = ({ kind }: Shape) => shapeKindColorMap[kind];

const shape1: Shape = new Circle(20);
const shape1Area1 = calculateArea1(shape1);
const shape1Area2 = calculateArea2(shape1);
const shape1Color = getShapeColor(shape1);
