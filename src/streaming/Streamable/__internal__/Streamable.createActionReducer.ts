import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import {
  Equality,
  Factory,
  Reducer,
  pipe,
  returns,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import { StreamableLike } from "../../../streaming.js";

import Streamable_createLifted from "./Streamable.createLifted.js";

const Streamable_createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  Streamable_createLifted(obs =>
    Observable_create(observer => {
      const acc = initialState();
      pipe(
        obs,
        Observable_scan<TAction, T>(reducer, returns(acc)),
        Container_concatWith<ObservableLike, T>(
          { concat: Observable_merge },
          pipe([acc], ReadonlyArray_toRunnableObservable()),
        ),
        Observable_distinctUntilChanged<T>(options),
        ReactiveContainer_sinkInto(observer),
      );
    }),
  );

export default Streamable_createActionReducer;
