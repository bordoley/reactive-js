import { ObservableLike, RunnableObservableLike } from "../../../rx.js";
declare const Observable_isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike<unknown>;
export { Observable_isRunnable as default };
