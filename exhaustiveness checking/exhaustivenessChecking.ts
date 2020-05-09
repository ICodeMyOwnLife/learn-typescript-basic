interface Circle {
  type: "circle";
  radius: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

interface Square {
  type: "square";
  size: number;
}

interface Triangle {
  type: "triangle";
  base: number;
  height: number;
}

type Shape = Square | Circle | Rectangle | Triangle;

/**************************************
 * Exhaustiveness checking using mapped types
 *************************************/
const shapeSizeCountMap: Record<Shape["type"], number> = {
  circle: 0,
  rectangle: 4,
  square: 4,
  triangle: 3,
};

export const f1 = (shape: Shape) => {
  const sizeCount = shapeSizeCountMap[shape.type];
  console.log(sizeCount);
};

/**************************************
 * Exhaustiveness checking using switch case with return type
 *************************************/
const calculateArea = (shape: Shape): number => {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius;

    case "rectangle":
      return shape.width * shape.height;

    case "square":
      return shape.size ** 2;

    case "triangle":
      return (shape.base * shape.height) / 2;
  }
};

export const f2 = (shape: Shape) => {
  const area = calculateArea(shape);
  console.log(area);
};

/**************************************
 * Exhaustiveness checking using assert never
 *************************************/
const assertNever = (o: never) => {
  throw Error(`Unexpected value ${o}`);
};

const isSymmetric1 = (shape: Shape) => {
  switch (shape.type) {
    case "circle":
    case "rectangle":
    case "square":
      return true;

    case "triangle":
      return false;

    default:
      return assertNever(shape);
  }
};

export const f3 = (shape: Shape) => {
  const isSymmetric = isSymmetric1(shape);
  console.log(isSymmetric);
};

const warnIfMissingCases = (o: never) => {
  console.warn(`Unexpected value ${o}`);
  return undefined as never;
};

const isSymmetric2 = (shape: Shape) => {
  switch (shape.type) {
    case "circle":
    case "rectangle":
    case "square":
      return true;

    case "triangle":
      return false;

    default:
      return warnIfMissingCases(shape);
  }
};

export const f4 = (shape: Shape) => {
  const isSymmetric = isSymmetric2(shape);
  console.log(isSymmetric);
};
