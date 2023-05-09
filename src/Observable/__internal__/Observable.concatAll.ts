import { DeferredContainers, ObservableContainer } from "../../containers.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: DeferredContainers.TypeClass<ObservableContainer.Type>["concatAll"] =
  () => Observable_mergeAll({ concurrency: 1 });

export default Observable_concatAll;
