import { pipe } from "../../../functions.js";
import { AsyncEnumerableLike, ObservableLike } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_empty from "../../../rx/Observable/__internal__/Observable.empty.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Enumerable_enumerate from "../../Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";

const AsyncEnumerable_toStreamable =
  <T>() =>
  (enumerable: AsyncEnumerableLike<ObservableLike, T>) =>
    Streamable_createLifted(obs =>
      Observable_create(observer => {
        const enumerator = pipe(
          enumerable,
          Enumerable_enumerate(),
          Disposable_addTo(observer),
        );

        pipe(
          obs,
          Observable_concatMap<void, T>(_ => {
            Enumerator_move(enumerator);

            return Enumerator_hasCurrent(enumerator)
              ? pipe(
                  Enumerator_getCurrent<ObservableLike<T>>(enumerator),
                  Observable_takeFirst<ObservableLike, T>(),
                )
              : Observable_empty();
          }),
          Observable_observeWith(observer),
        );
      }),
    );

export default AsyncEnumerable_toStreamable;
