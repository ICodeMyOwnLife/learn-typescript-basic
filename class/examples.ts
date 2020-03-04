import { Dog, Duck, Mouse, Cat } from ".";

export const cat1 = new Cat();
export const cat2 = Cat.createNew("tri-colored");
export const cat3: Cat = new Mouse();

export const mouse1 = new Mouse();
export const mouse2 = Mouse.createNew("white");
export const mouse3: Mouse = new Cat();

export const dog1 = new Dog();
export const dog2 = Dog.createNew("bull");
export const dog3: Dog = new Duck();

export const duck1 = new Duck();
export const duck2 = Duck.createNew("peking");
export const duck3: Duck = new Dog();
