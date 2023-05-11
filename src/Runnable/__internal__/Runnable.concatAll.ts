import type * as Runnable from "../../Runnable.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: Runnable.Signature["concatAll"] = () =>
  Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
