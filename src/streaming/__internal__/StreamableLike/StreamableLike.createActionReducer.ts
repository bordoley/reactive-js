import ContainerLike__concatWith from "../../../containers/__internal__/ContainerLike/ContainerLike.concatWith";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { Equality, Factory, Reducer, pipe, returns } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__distinctUntilChanged from "../../../rx/__internal__/ObservableLike/ObservableLike.distinctUntilChanged";
import ObservableLike__merge from "../../../rx/__internal__/ObservableLike/ObservableLike.merge";
import ObservableLike__scan from "../../../rx/__internal__/ObservableLike/ObservableLike.scan";
import ReactiveContainerLike__sinkInto from "../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import { StreamableLike } from "../../../streaming";

import StreamableLike__createLifted from "./StreamableLike.createLifted";

const StreamableLike__createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  StreamableLike__createLifted(obs =>
    ObservableLike__create(observer => {
      const acc = initialState();
      pipe(
        obs,
        ObservableLike__scan<TAction, T>(reducer, returns(acc)),
        ContainerLike__concatWith<ObservableLike, T>(
          { concat: ObservableLike__merge },
          pipe([acc], ReadonlyArrayLike__toRunnableObservable()),
        ),
        ObservableLike__distinctUntilChanged<T>(options),
        ReactiveContainerLike__sinkInto(observer),
      );
    }),
  );

export default StreamableLike__createActionReducer;
