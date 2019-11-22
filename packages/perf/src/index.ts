import { run as runCombine } from "./combine";
import { run as runFilterMapFusion } from "./filter-map-fusion";
import { run as runFilterMapReduce } from "./filter-map-reduce";
import { run as runFold } from "./fold";
import { run as runMerge } from "./merge";

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
      padl(10, t.name) +
      padr(13, t.hz.toFixed(2) + " op/s") +
      " \xb1" +
      padr(7, t.stats.rme.toFixed(2) + "%") +
      padr(15, " (" + t.stats.sample.length + " samples)");

    console.log(result);
  }
};

const runSuite = (suite: any) => {
  return suite
    .on("start", logStart(suite))
    .on("cycle", logResults)
    .on("complete", logComplete)
    .run();
};

runSuite(runFilterMapFusion(1000000));
runSuite(runFilterMapReduce(1000000));
runSuite(runMerge(1000, 1000));
runSuite(runFold(1000000));
runSuite(runCombine(500000));
