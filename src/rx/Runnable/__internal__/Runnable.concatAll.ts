import { Container } from "../../../containers.js";
import { RunnableContainer } from "../../../rx.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: Container.ConcatAll<RunnableContainer>["concatAll"] =
  () => Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
