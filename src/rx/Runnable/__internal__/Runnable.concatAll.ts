import { ConcatAll } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: ConcatAll<RunnableLike>["concatAll"] = () =>
  Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
