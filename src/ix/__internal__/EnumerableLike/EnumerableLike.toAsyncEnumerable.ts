import { pipe, returns } from "../../../functions";
import {
  AsyncEnumerableLike,
  EnumerableLike,
  EnumeratorLike,
  ToAsyncEnumerable,
} from "../../../ix";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__map from "../../../rx/__internal__/ObservableLike/ObservableLike.map";
import ObservableLike__takeWhile from "../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile";
import ReactiveContainerLike__sinkInto from "../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import { move } from "../../SourceLike";
import AsyncEnumerableLike__create from "../AsyncEnumerableLike/AsyncEnumerableLike.create";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "../EnumeratorLike/EnumeratorLike.hasCurrent";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";

const EnumerableLike__toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (<T>() =>
    returns(
      (enumerable: EnumerableLike<T>): AsyncEnumerableLike<T> =>
        AsyncEnumerableLike__create(observable =>
          ObservableLike__create(observer => {
            const enumerator = pipe(
              enumerable,
              EnumerableLike__enumerate(),
              DisposableLike__addTo(observer),
            );

            pipe(
              observable,
              ObservableLike__map(_ => move(enumerator)),
              ObservableLike__takeWhile<EnumeratorLike<T>>(
                EnumeratorLike__hasCurrent,
              ),
              ObservableLike__map(EnumeratorLike__getCurrent),
              ReactiveContainerLike__sinkInto(observer),
            );
          }),
        ),
    ))();

export default EnumerableLike__toAsyncEnumerable;
