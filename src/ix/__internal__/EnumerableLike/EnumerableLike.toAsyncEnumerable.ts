import { pipe, returns } from "../../../functions";
import {
  AsyncEnumerableLike,
  EnumerableLike,
  EnumeratorLike,
  ToAsyncEnumerable,
} from "../../../ix";
import { sinkInto } from "../../../rx/ReactiveContainerLike";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__map from "../../../rx/__internal__/ObservableLike/ObservableLike.map";
import ObservableLike__takeWhile from "../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile";
import { addTo } from "../../../util/DisposableLike";
import { getCurrent, hasCurrent } from "../../EnumeratorLike";
import { move } from "../../SourceLike";
import AsyncEnumerableLike__create from "../AsyncEnumerableLike/AsyncEnumerableLike.create";
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
              addTo(observer),
            );

            pipe(
              observable,
              ObservableLike__map(_ => move(enumerator)),
              ObservableLike__takeWhile<EnumeratorLike<T>>(hasCurrent),
              ObservableLike__map(getCurrent),
              sinkInto(observer),
            );
          }),
        ),
    ))();

export default EnumerableLike__toAsyncEnumerable;
