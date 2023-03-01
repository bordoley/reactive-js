import { pipe, returns } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  EnumerableLike,
  EnumeratorLike,
  ToAsyncEnumerable,
} from "../../../ix.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import AsyncEnumerable_create from "../../AsyncEnumerable/__internal__/AsyncEnumerable.create.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent.js";
import Source_move from "../../Source/__internal__/Source.move.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

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
            Observable_observeWith(observer),
          );
        }),
      ),
  );

export default Enumerable_toAsyncEnumerable;
