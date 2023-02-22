import { run } from "./benchmarkRunner.js";
import {
  map,
  filterMapFusion,
  filterMapReduce,
  scanReduce,
  every,
} from "./perfTests.js";

const doRun = async () => {
  await run(map(10000));
  await run(filterMapFusion(10000));
  await run(filterMapReduce(10000));
  await run(scanReduce(10000));
  await run(every(10000));
};

doRun();
