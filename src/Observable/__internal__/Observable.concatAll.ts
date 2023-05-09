import { DeferredContainers, ObservableContainer } from "../../types.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: DeferredContainers.TypeClass<ObservableContainer>["concatAll"] =
  () => Observable_mergeAll({ concurrency: 1 });

export default Observable_concatAll;
