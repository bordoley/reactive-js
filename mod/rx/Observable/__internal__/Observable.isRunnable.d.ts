import { ObservableLike, RunnableLike } from "../../../rx.js";
declare const Observable_isRunnable: (obs: ObservableLike) => obs is RunnableLike<unknown>;
export default Observable_isRunnable;
