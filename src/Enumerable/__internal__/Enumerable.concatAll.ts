import { DeferredContainers, EnumerableContainer } from "../../types.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: DeferredContainers.TypeClass<EnumerableContainer>["concatAll"] =
  () => Enumerable_mergeAll({ concurrency: 1 });

export default Enumerable_concatAll;
