import { run } from "./benchmarkRunner.js";
import {
  map,
  filterMapFusion,
  filterMapReduce,
  scanReduce,
} from "./perfTests.js";

const doRun = async () => {
  await run(map(1000000));
  await run(filterMapFusion(1000000));
  await run(filterMapReduce(1000000));
  await run(scanReduce(1000000));
};

doRun();
