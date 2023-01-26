import Container_concatWith from "../../../containers/__internal__/Container/Container.concatWith";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Equality, Factory, Reducer, pipe, returns } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_create from "../../../rx/__internal__/Observable/Observable.create";
import Observable_distinctUntilChanged from "../../../rx/__internal__/Observable/Observable.distinctUntilChanged";
import Observable_merge from "../../../rx/__internal__/Observable/Observable.merge";
import Observable_scan from "../../../rx/__internal__/Observable/Observable.scan";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import { StreamableLike } from "../../../streaming";

import Streamable_createLifted from "./Streamable.createLifted";

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
