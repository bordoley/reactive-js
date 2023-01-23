import { FromArray } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { ObservableLike } from "../../../rx";

const ObservableLike__fromArray: FromArray<
  ObservableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["fromArray"] = ReadonlyArrayLike__toRunnableObservable;
export default ObservableLike__fromArray;
