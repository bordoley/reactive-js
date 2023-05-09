import { ObservableLike, RunnableLike } from "../../types.js";
declare const Observable_isRunnable: (obs: ObservableLike) => obs is RunnableLike<unknown>;
export default Observable_isRunnable;
