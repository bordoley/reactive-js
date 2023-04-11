import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: ConcatAll<EnumerableLike>["concatAll"] = () =>
  Enumerable_mergeAll({ concurrency: 1 });

export default Enumerable_concatAll;
