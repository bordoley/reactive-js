import { ConcatAll } from "../../../containers.js";
import { EnumerableContainerLike } from "../../../rx.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: ConcatAll<EnumerableContainerLike>["concatAll"] =
  () => Enumerable_mergeAll({ concurrency: 1 });

export default Enumerable_concatAll;
