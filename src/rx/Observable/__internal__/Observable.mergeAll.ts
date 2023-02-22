import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ (() =>
  HigherOrderObservable_mergeAll<ObservableLike>(
    Observable_lift(),
  ) as ConcatAll<
    ObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"])();

export default Observable_mergeAll;
