import { ConcatAll } from "../../../containers.js";
import { RunnableContainerLike } from "../../../rx.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: ConcatAll<RunnableContainerLike>["concatAll"] = () =>
  Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
