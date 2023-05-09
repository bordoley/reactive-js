import { DeferredContainers, RunnableContainer } from "../../types.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: DeferredContainers.TypeClass<RunnableContainer>["concatAll"] =
  () => Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
