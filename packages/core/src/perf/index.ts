import { run } from "./benchmarkRunner";
import { map, filterMapFusion, filterMapReduce, scanReduce, every } from "./perfTests";

const doRun = async () => {
  await run(map(1000000));
  await run(filterMapFusion(1000000));
  await run(filterMapReduce(1000000));
  await run(scanReduce(1000000));
  await run(every(1000000));
};

doRun();
