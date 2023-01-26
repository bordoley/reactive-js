import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableObservableLike,
} from "../../../rx";

const Observable$isRunnable = (
  obs: ObservableLike,
): obs is RunnableObservableLike => obs[ObservableLike_isRunnable];

export default Observable$isRunnable;
