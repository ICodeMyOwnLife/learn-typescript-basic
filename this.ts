/**
 * `this` parameter
 */
export function print(this: User, prefix: string) {
  const { id, name, yob } = this;
  console.log(`${prefix} #${id}: ${name} - ${yob}`);
}

const user: User = {
  id: 1,
  name: "User 1",
  yob: 2000,
  active: true
};

print.call(user, "User");

const user2 = {
  ...user,
  print
};

user2.print("User");

/**
 * ThisType<T>
 */
type UserMethods = ThisType<User> & {
  activate: () => void;
  deactivate: () => void;
};

const userMethods: UserMethods = {
  activate() {
    this.active = true;
  },

  deactivate() {
    this.active = false;
  }
};

function makeCustomModel<
  TModel extends object,
  TMethods extends ThisType<TModel>
>(model: TModel, methods: TMethods) {
  return Object.assign({}, model, methods);
}

const customUser = makeCustomModel(user, userMethods);
customUser.activate();
console.log(customUser.active);
customUser.deactivate();
console.log(customUser.active);

interface User {
  id: number;
  name: string;
  yob: number;
  active: boolean;
}
