import { FromReadonlyArray } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import { ObservableLike } from "../../../rx";

const Observable_fromReadonlyArray: FromReadonlyArray<
  ObservableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toRunnableObservable;

export default Observable_fromReadonlyArray;
