import Container$concatWith from "../../../containers/__internal__/Container/Container.concatWith";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Equality, Factory, Reducer, pipe, returns } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import Observable$distinctUntilChanged from "../../../rx/__internal__/Observable/Observable.distinctUntilChanged";
import Observable$merge from "../../../rx/__internal__/Observable/Observable.merge";
import Observable$scan from "../../../rx/__internal__/Observable/Observable.scan";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import { StreamableLike } from "../../../streaming";

import Streamable$createLifted from "./Streamable.createLifted";

const Streamable$createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  Streamable$createLifted(obs =>
    Observable$create(observer => {
      const acc = initialState();
      pipe(
        obs,
        Observable$scan<TAction, T>(reducer, returns(acc)),
        Container$concatWith<ObservableLike, T>(
          { concat: Observable$merge },
          pipe([acc], ReadonlyArray$toRunnableObservable()),
        ),
        Observable$distinctUntilChanged<T>(options),
        ReactiveContainer$sinkInto(observer),
      );
    }),
  );

export default Streamable$createActionReducer;
