import { pipe, returns } from "../../../functions";
import {
  AsyncEnumerableLike,
  EnumerableLike,
  EnumeratorLike,
  ToAsyncEnumerable,
} from "../../../ix";
import Observable_create from "../../../rx/__internal__/Observable/Observable.create";
import Observable_map from "../../../rx/__internal__/Observable/Observable.map";
import Observable_takeWhile from "../../../rx/__internal__/Observable/Observable.takeWhile";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import AsyncEnumerable_create from "../AsyncEnumerable/AsyncEnumerable.create";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import Source_move from "../Source/Source.move";
import Enumerable_enumerate from "./Enumerable.enumerate";

const Enumerable_toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (<T>() =>
    returns(
      (enumerable: EnumerableLike<T>): AsyncEnumerableLike<T> =>
        AsyncEnumerable_create(observable =>
          Observable_create(observer => {
            const enumerator = pipe(
              enumerable,
              Enumerable_enumerate(),
              Disposable_addTo(observer),
            );

            pipe(
              observable,
              Observable_map(_ => Source_move(enumerator)),
              Observable_takeWhile<EnumeratorLike<T>>(Enumerator_hasCurrent),
              Observable_map(Enumerator_getCurrent),
              ReactiveContainer_sinkInto(observer),
            );
          }),
        ),
    ))();

export default Enumerable_toAsyncEnumerable;
