import { FromArray } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import { ObservableLike } from "../../../rx";

const Observable_fromArray: FromArray<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromArray"] = ReadonlyArray_toRunnableObservable;
export default Observable_fromArray;
