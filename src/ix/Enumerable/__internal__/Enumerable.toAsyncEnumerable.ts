import { pipe, returns } from "../../../functions";
import {
  AsyncEnumerableLike,
  EnumerableLike,
  EnumeratorLike,
  ToAsyncEnumerable,
} from "../../../ix";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import AsyncEnumerable_create from "../../AsyncEnumerable/__internal__/AsyncEnumerable.create";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent";
import Source_move from "../../Source/__internal__/Source.move";
import Enumerable_enumerate from "./Enumerable.enumerate";

const Enumerable_toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    (enumerable: EnumerableLike): AsyncEnumerableLike =>
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
            Observable_takeWhile<EnumeratorLike>(Enumerator_hasCurrent),
            Observable_map(Enumerator_getCurrent),
            ReactiveContainer_sinkInto(observer),
          );
        }),
      ),
  );

export default Enumerable_toAsyncEnumerable;
