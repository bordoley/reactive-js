import { pipe, returns } from "../../../functions";
import {
  AsyncEnumerableLike,
  EnumerableLike,
  EnumeratorLike,
  ToAsyncEnumerable,
} from "../../../ix";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import Observable$map from "../../../rx/__internal__/Observable/Observable.map";
import Observable$takeWhile from "../../../rx/__internal__/Observable/Observable.takeWhile";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import AsyncEnumerable$create from "../AsyncEnumerable/AsyncEnumerable.create";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import Source$move from "../Source/Source.move";
import Enumerable$enumerate from "./Enumerable.enumerate";

const Enumerable$toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (<T>() =>
    returns(
      (enumerable: EnumerableLike<T>): AsyncEnumerableLike<T> =>
        AsyncEnumerable$create(observable =>
          Observable$create(observer => {
            const enumerator = pipe(
              enumerable,
              Enumerable$enumerate(),
              Disposable$addTo(observer),
            );

            pipe(
              observable,
              Observable$map(_ => Source$move(enumerator)),
              Observable$takeWhile<EnumeratorLike<T>>(Enumerator$hasCurrent),
              Observable$map(Enumerator$getCurrent),
              ReactiveContainer$sinkInto(observer),
            );
          }),
        ),
    ))();

export default Enumerable$toAsyncEnumerable;
