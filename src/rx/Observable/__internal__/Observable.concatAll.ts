import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: ConcatAll<ObservableLike>["concatAll"] = () =>
  Observable_mergeAll({ maxConcurrency: 1 });

export default Observable_concatAll;
