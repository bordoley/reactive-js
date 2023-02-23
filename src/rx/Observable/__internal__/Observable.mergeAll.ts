import { MergeAll, ObservableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: MergeAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"] = /*@__PURE__*/ (() =>
  HigherOrderObservable_mergeAll<ObservableLike>(Observable_lift()) as MergeAll<
    ObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["mergeAll"])();

export default Observable_mergeAll;
