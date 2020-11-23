import * as Benchmark from "benchmark";
import { BenchmarkGroup } from "../experimental/benchmark";

const padl = (n: number, s: string) => {
  while (s.length < n) {
    s += " ";
  }
  return s;
};

const padr = (n: number, s: string) => {
  while (s.length < n) {
    s = " " + s;
  }
  return s;
};

const logStart = (suite: any) => () => {
  console.log(suite.name);
  console.log("-----------------------------------------------");
};

function logComplete() {
  console.log("-----------------------------------------------");
}

const logResults = (e: any) => {
  const t = e.target;

  if (t.failure) {
    console.error(padl(10, t.name) + "FAILED: " + e.target.failure);
  } else {
    const result =
      padl(15, t.name) +
      padr(15, t.hz.toFixed(2) + " op/s") +
      " \xb1" +
      padr(7, t.stats.rme.toFixed(2) + "%") +
      padr(15, " (" + t.stats.sample.length + " samples)");

    console.log(result);
  }
};

export const run = (group: BenchmarkGroup<any>) =>
  new Promise<void>(resolve => {
    const suite = new Benchmark.Suite(group.name);
    const data = group.setup();

    const options = {
      defer: true,
      onError: (e: any) => {
        e.currentTarget.failure = e.error;
      },
    };

    for (const test of group.tests) {
      suite.add(
        test.name,
        async (deferred: any) => {
          const run = await test.factory(data);
          run();
          deferred.resolve();
        },
        options,
      );
    }

    return suite
      .on("start", logStart(suite))
      .on("cycle", logResults)
      .on("complete", logComplete)
      .on("complete", () => resolve())
      .run();
  });
