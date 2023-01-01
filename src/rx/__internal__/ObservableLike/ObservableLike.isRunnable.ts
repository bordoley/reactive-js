import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableObservableLike,
} from "../../../rx";

const ObservableLike__isRunnable = (
  obs: ObservableLike,
): obs is RunnableObservableLike => obs[ObservableLike_isRunnable];

export default ObservableLike__isRunnable;
