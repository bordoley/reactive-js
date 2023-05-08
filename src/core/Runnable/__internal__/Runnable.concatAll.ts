import { Container, RunnableContainer } from "../../../core.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: Container.ConcatAll<RunnableContainer>["concatAll"] =
  () => Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
