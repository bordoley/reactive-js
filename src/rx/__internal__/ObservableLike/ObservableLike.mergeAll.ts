import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservableLike__mergeAll from "../HigherOrderObservableLike/HigherOrderObservableLike.mergeAll";
import ObservableLike__lift from "./ObservableLike.lift";

const ObservableLike__mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservableLike__mergeAll<ObservableLike>(
    ObservableLike__lift(),
  ) as ConcatAll<
    ObservableLike,
    {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    }
  >["concatAll"];

export default ObservableLike__mergeAll;
