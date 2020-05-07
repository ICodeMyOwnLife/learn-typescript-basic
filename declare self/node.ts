declare const globalThis: NodeJS.Global;

const run = () => {
  let count = 0;
  const timerId = globalThis.setInterval(() => {
    ++count;
    globalThis.console.log(count);
    if (count > 5) clearInterval(timerId);
  }, 2000);
};

/**
 * In order to make `declare const self` work we have to convert the file to ES module by using `import` or `export`
 */
export default run;
