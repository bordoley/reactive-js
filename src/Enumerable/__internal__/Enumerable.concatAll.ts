import type * as Enumerable from "../../Enumerable.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: Enumerable.Signature["concatAll"] = () =>
  Enumerable_mergeAll({ concurrency: 1 });

export default Enumerable_concatAll;
