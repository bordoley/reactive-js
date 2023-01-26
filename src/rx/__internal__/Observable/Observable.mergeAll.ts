import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservable$mergeAll from "../HigherOrderObservable/HigherOrderObservable.mergeAll";
import Observable$lift from "./Observable.lift";

const Observable$mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ HigherOrderObservable$mergeAll<ObservableLike>(
  Observable$lift(),
) as ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export default Observable$mergeAll;
