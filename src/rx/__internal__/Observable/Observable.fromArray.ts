import { FromArray } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { ObservableLike } from "../../../rx";

const Observable_fromArray: FromArray<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  }
>["fromArray"] = ReadonlyArray_toRunnableObservable;
export default Observable_fromArray;
