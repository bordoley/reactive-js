import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable_mergeAll from "../HigherOrderObservable/HigherOrderObservable.mergeAll";
import Observable_lift from "./Observable.lift";

const Observable_mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ HigherOrderObservable_mergeAll<ObservableLike>(
  Observable_lift(),
) as ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export default Observable_mergeAll;
