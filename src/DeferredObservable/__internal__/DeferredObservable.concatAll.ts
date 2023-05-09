import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_concatAll: DeferredObservableContainer.TypeClass["concatAll"] =
  () => DeferredObservable_mergeAll({ concurrency: 1 });

export default DeferredObservable_concatAll;
