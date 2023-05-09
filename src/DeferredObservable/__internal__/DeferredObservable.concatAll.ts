import {
  DeferredContainers,
  DeferredObservableContainer,
} from "../../types.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_concatAll: DeferredContainers.TypeClass<DeferredObservableContainer>["concatAll"] =
  () => DeferredObservable_mergeAll({ concurrency: 1 });

export default DeferredObservable_concatAll;
