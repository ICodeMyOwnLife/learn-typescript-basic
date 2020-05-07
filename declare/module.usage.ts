import * as Module from "./module";

console.log(Module.__APP_VERSION__);

const writeFile = async () => {
  const success = await Module.writeToFile("./abc.txt", "abc def", {
    encoding: Module.Encoding.ASCII,
    fileType: Module.FileType.TXT,
  });
  console.log(success);
};

writeFile();

Module.ProductService.timeout = 5000;
const productService = new Module.ProductService("/api/products");

const getProduct = async () => {
  const { id, name, createdAt } = await productService.get();
  console.log(id, name, createdAt);
};

getProduct();
