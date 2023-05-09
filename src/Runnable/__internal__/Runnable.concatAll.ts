import { RunnableContainer } from "../../containers.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: RunnableContainer.TypeClass["concatAll"] = () =>
  Runnable_mergeAll({ concurrency: 1 });

export default Runnable_concatAll;
