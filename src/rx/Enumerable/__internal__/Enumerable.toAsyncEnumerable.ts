import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe } from "../../../functions.js";
import { EnumerableLike, ObservableLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../streaming.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import {
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

// FIXME: Support delay argument, and expose it in Iterable_toAsyncEnumerable
const Enumerable_toAsyncEnumerable: ToAsyncEnumerable<
  EnumerableLike,
  { delay?: number }
>["toAsyncEnumerable"] =
  /*@__PURE__*/


    <T>(options?: { delay?: number }) =>
    (enumerable: EnumerableLike): AsyncEnumerableLike => {
      const { delay = 0 } = options ?? {};

      return Streamable_createLifted<T>(
        observable =>
          Observable_create(observer => {
            const enumerator = pipe(
              enumerable,
              Enumerable_enumerate<T>(),
              Disposable_addTo(observer),
            );

            pipe(
              observable,
              Observable_forEach<ObservableLike, void>(_ => {
                enumerator[EnumeratorLike_move]();
              }),
              Observable_takeWhile(_ => enumerator[EnumeratorLike_hasCurrent]),
              delay > 0
                ? Observable_concatMap(_ =>
                    pipe(
                      enumerator[EnumeratorLike_current],
                      Optional_toObservable({ delay }),
                    ),
                  )
                : Observable_map<ObservableLike, void, T>(
                    _ => enumerator[EnumeratorLike_current],
                  ),
              Observable_observeWith(observer),
            );
          }),
        true,
        delay === 0,
        true,
      );
    };

export default Enumerable_toAsyncEnumerable;
