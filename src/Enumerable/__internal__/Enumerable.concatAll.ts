import { EnumerableContainer } from "../../containers.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: EnumerableContainer.TypeClass["concatAll"] = () =>
  Enumerable_mergeAll({ concurrency: 1 });

export default Enumerable_concatAll;
