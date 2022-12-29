import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableObservableLike,
} from "../../../rx";

const isRunnable = (obs: ObservableLike): obs is RunnableObservableLike =>
  obs[ObservableLike_isRunnable];

export default isRunnable;
