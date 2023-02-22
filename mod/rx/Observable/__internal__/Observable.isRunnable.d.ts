import { ObservableLike, RunnableObservableLike } from "../../../rx.js";
declare const Observable_isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike<unknown>;
export default Observable_isRunnable;
