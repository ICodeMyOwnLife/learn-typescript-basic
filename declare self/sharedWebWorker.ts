declare const self: SharedWorkerGlobalScope;

const portList: MessagePort[] = [];

self.onconnect = ({ ports: [port] }) => {
  portList.push(port);
  port.addEventListener('message', ({ data }) =>
    portList.forEach(p => p.postMessage(data)),
  );
  port.start();
};

/**
 * In order to make `declare const self` work we have to convert the file to ES module by using `import` or `export`
 */
export {};
