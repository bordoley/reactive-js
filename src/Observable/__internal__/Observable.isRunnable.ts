import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableLike,
} from "../../types.js";

const Observable_isRunnable = (obs: ObservableLike): obs is RunnableLike =>
  obs[ObservableLike_isRunnable];

export default Observable_isRunnable;
