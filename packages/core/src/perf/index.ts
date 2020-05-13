import { run } from "./benchmarkRunner";
import { filterMapFusion, filterMapReduce, scanReduce } from "./perfTests";

const doRun = async() => {
  await run(filterMapFusion(1000000));
  await run(filterMapReduce(1000000));
  await run(scanReduce(1000000));
}

doRun();