/**
 * How to declare a class
 */
interface Animal {
  readonly breed: string;
}

export interface Dog extends Animal {
  bark: (times: number) => void;
}

export interface Duck extends Animal {
  quack: (times: number) => void;
}

interface AnimalStatic {
  readonly species: string;
  readonly numberOfLimbs: number;
}

interface DogStatic extends AnimalStatic {
  new (): Dog;
  new (breed: string): Dog;
  readonly createNew: (breed: string) => Dog;
}

interface DuckStatic {
  new (): Duck;
  new (breed: string): Duck;
  readonly createNew: (breed: string) => Duck;
}

export class Cat implements Animal {
  readonly breed: string;
  private name: string;
  constructor();
  constructor(breed: string);
  static createNew: (breed: string) => Cat;
}

export class Mouse implements Animal {
  readonly breed: string;
  private name: string;
  constructor();
  constructor(breed: string);
  static createNew: (breed: string) => Mouse;
}

export const Dog: DogStatic;

export const Duck: DuckStatic;
