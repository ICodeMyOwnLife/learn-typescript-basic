/**
 * Dynamic import
 * References:
 *  - https://mariusschulz.com/blog/typescript-2-4-dynamic-import-expressions
 */
export async function run() {
  const { Service1 } = await import("./libs/service1");
  const service1 = new Service1("Test");
  console.log(service1.value);
  service1.value = "Nice";
  console.log(service1.value);
}

run();
