import {
  Container,
  ObservableContainer,
  ObservableLike,
  ReactiveContainer,
} from "../../../core.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

const Observable_forkMerge: ReactiveContainer.TypeClass<ObservableContainer>["forkMerge"] =

    <TIn, TOut>(
      ...ops: readonly Container.Operator<ObservableContainer, TIn, TOut>[]
    ) =>
    (obs: ObservableLike<TIn>) =>
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
        Observable_mergeObservables,
      );

export default Observable_forkMerge;
