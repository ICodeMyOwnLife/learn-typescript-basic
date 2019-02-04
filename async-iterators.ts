import { delay } from "bluebird";

run();

async function run() {
  logCount(10, 1000, 20);
  logCount(100, 600, 30);
}

async function logCount(start: number, period: number, limit: number) {
  for await (const n of count(start, period, limit)) {
    console.log(n);
  }
}

async function* count(start: number, period: number, limit: number) {
  for (let i = 0; i < limit; ++i) {
    await delay(period);
    yield start + i;
  }
}
