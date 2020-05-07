export const forever = <TError>(
  task: Task<undefined, TError>,
  finalCallback: Callback<undefined, TError>
) => until(() => true, task, finalCallback);

export const parallel = <TResult, TError>(
  tasks: Task<TResult, TError>[],
  finalCallback: Callback<TResult[], TError>
) => {
  let count = 0;
  const results = new Array<TResult>(tasks.length);

  if (!tasks.length) return finalCallback(null, []);

  tasks.forEach((task, index) =>
    task((err, res) => {
      if (err) return finalCallback(err);
      results[index] = res!;
      count += 1;
      if (count === tasks.length) return finalCallback(err, results);
    })
  );
};

export const race = <TResult, TError>(
  tasks: Task<TResult, TError>[],
  finalCallback: Callback<TResult, TError>
) => {
  let done = false;

  if (!tasks.length) return finalCallback(null, undefined);

  tasks.forEach((task) =>
    task((err, res) => {
      if (done) return;
      if (err) finalCallback(err);
      else finalCallback(null, res);
      done = true;
    })
  );
};

export const series = <TResult, TError>(
  tasks: Task<TResult, TError>[],
  finalCallback: Callback<TResult[], TError>
) => {
  let index = 0;
  const results: TResult[] = [];

  if (!tasks.length) return finalCallback(null, []);

  const callback: Callback<TResult, TError> = (err, res) => {
    if (err) return finalCallback(err);

    results.push(res!);
    index += 1;

    if (index < tasks.length) {
      tasks[index](callback);
    } else {
      finalCallback(null, results);
    }
  };

  tasks[0](callback);
};

export const times = <TError>(
  n: number,
  task: Task<undefined, TError>,
  finalCallback: Callback<undefined, TError>
) => {
  let count = 0;

  return until<TError>(
    () => count >= n,
    (cb) => {
      task(cb);
      count += 1;
    },
    finalCallback
  );
};

export const until = <TError>(
  test: () => boolean,
  task: Task<undefined, TError>,
  finalCallback: Callback<undefined, TError>
) => {
  const callback: Callback<undefined, TError> = (err) => {
    if (err) return finalCallback(err);
    if (!test()) task(callback);
  };
  if (!test()) task(callback);
};

export const untilTimeout = <TError>(
  ms: number,
  task: Task<undefined, TError>,
  finalCallback: Callback<undefined, TError>
) => {
  const startTime = Date.now();
  return until(() => Date.now() < startTime + ms, task, finalCallback);
};

export const waterfall = () => {};

export type Callback<TResult, TError> = (
  error: TError | null,
  result?: TResult
) => void;

export type Task<TResult, TError> = (
  callback: Callback<TResult, TError>
) => void;

export type AsyncFlowFunction<TFinalResult> = <TResult, TError>(
  tasks: Task<TResult, TError>[],
  finalCallback: Callback<TFinalResult, TError>
) => void;

const finalCallback: Callback<unknown, unknown> = (err, results) => {
  if (err) console.error(err);
  if (results) console.log(results);
};

const testAsyncFlowFunction = (
  func: AsyncFlowFunction<unknown>,
  ...args: readonly (readonly [Error | null, number | undefined, number])[]
) => {
  func<number, Error>(
    args.map(([err, res, ms], index) => (cb) => {
      console.log(`Cb #${index + 1} runs`);
      setTimeout(() => cb(err, res), ms);
    }),
    finalCallback
  );
};

const successTestCase = [
  [null, 1, 300],
  [null, 2, 200],
  [null, 3, 400],
  [null, 4, 100],
  [null, 5, 300],
] as const;

// const failedTestCase = [
//   [null, 1, 300],
//   [null, 2, 200],
//   [null, 3, 400],
//   [new Error("Failed"), undefined, 300],
//   [null, 5, 300],
// ] as const;

// testAsyncFlowFunction(parallel, ...successTestCase);
// testAsyncFlowFunction(parallel, ...failedTestCase);
testAsyncFlowFunction(race, ...successTestCase);
// testAsyncFlowFunction(race, ...failedTestCase);
// testAsyncFlowFunction(series, ...successTestCase);
// testAsyncFlowFunction(series, ...failedTestCase);
