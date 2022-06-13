import { run } from "./benchmarkRunner";
import {
  map,
  filterMapFusion,
  filterMapReduce,
  scanReduce,
  every,
} from "./perfTests";

const doRun = async () => {
  await run(map(100000));
  await run(filterMapFusion(100000));
  await run(filterMapReduce(100000));
  await run(scanReduce(100000));
  await run(every(100000));
};

doRun();
