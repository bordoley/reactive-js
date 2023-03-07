import { abs } from "../../../__internal__/math.js";
import { ReadonlyArrayLike } from "../../../containers.js";
import {
  compose,
  decrement,
  increment,
  pipe,
  returns,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../streaming.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import Optional_toObservable from "../../Optional/Optional_toObservable.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const ReadonlyArray_toAsyncEnumerable: ToAsyncEnumerable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
  }
>["toAsyncEnumerable"] =
  /*@__PURE__*/
  ReadonlyArray_toContainer<
    AsyncEnumerableLike,
    {
      readonly delay?: number;
    }
  >(
    <T>(
      array: readonly T[],
      start: number,
      count: number,
      options?: {
        readonly delay?: number;
      },
    ) => {
      const delay = options?.delay ?? 0 > 0;

      return Streamable_createLifted<T>(
        compose(
          count >= 0
            ? Observable_scan<ObservableLike, void, number>(
                increment,
                returns(start - 1),
              )
            : Observable_scan<ObservableLike, void, number>(
                decrement,
                returns(start + 1),
              ),
          delay ?? 0 > 0
            ? Observable_concatMap((i: number) =>
                pipe(array[i], Optional_toObservable(options)),
              )
            : Observable_map<ObservableLike, number, T>(
                (i: number) => array[i],
              ),
          Observable_takeFirst<ObservableLike, T>({ count: abs(count) }),
        ),
        true,
        false,
        false,
      );
    },
  );

export default ReadonlyArray_toAsyncEnumerable;
