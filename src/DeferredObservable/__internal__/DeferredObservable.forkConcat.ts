import Observable_concatObservables from "../../Observable/__internal__/Observable.concatObservables.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  Containers,
  DeferredContainers,
  ObservableContainer,
} from "../../containers.js";
import { pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";

// FIXME: Wrong typeclass, define a better signature
const DeferredObservable_forkConcat: DeferredContainers.TypeClass<ObservableContainer.Type>["forkConcat"] =

    <TIn, TOut>(
      ...ops: readonly Containers.Operator<
        ObservableContainer.Type,
        TIn,
        TOut
      >[]
    ) =>
    (obs: ObservableLike<TIn>) =>
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
        Observable_concatObservables,
      );

export default DeferredObservable_forkConcat;
