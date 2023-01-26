import { FromArray } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { ObservableLike } from "../../../rx";

const Observable$fromArray: FromArray<
  ObservableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
>["fromArray"] = ReadonlyArray$toRunnableObservable;
export default Observable$fromArray;
