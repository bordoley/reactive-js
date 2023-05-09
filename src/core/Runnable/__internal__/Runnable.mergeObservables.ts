import { RunnableLike } from "../../../core.js";
import Observable_mergeObservables from "../../Observable/__internal__/Observable.mergeObservables.js";

const Runnable_mergeObservables: <T>(
  observables: readonly RunnableLike<T>[],
) => RunnableLike<T> = Observable_mergeObservables as <T>(
  observables: readonly RunnableLike<T>[],
) => RunnableLike<T>;

export default Runnable_mergeObservables;
