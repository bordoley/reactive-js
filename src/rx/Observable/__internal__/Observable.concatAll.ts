import { ConcatAll } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: ConcatAll<ObservableContainerLike>["concatAll"] =
  () => Observable_mergeAll({ concurrency: 1 });

export default Observable_concatAll;
