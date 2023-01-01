import { concatWith } from "../../../containers/ContainerLike";
import { toObservable } from "../../../containers/ReadonlyArrayLike";
import { Equality, Factory, Reducer, pipe, returns } from "../../../functions";
import {
  create,
  distinctUntilChanged,
  mergeT,
  scan,
} from "../../../rx/ObservableLike";
import { sinkInto } from "../../../rx/ReactiveContainerLike";
import { StreamableLike } from "../../../streaming";

import StreamableLike__createLifted from "./StreamableLike.createLifted";

const StreamableLike__createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  StreamableLike__createLifted(obs =>
    create(observer => {
      const acc = initialState();
      pipe(
        obs,
        scan<TAction, T>(reducer, returns(acc)),
        concatWith(mergeT, pipe([acc], toObservable())),
        distinctUntilChanged<T>(options),
        sinkInto(observer),
      );
    }),
  );

export default StreamableLike__createActionReducer;
