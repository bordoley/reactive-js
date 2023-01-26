import { ObservableLike, RunnableObservableLike } from "../../../rx.js";
declare const Observable$isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike<unknown>;
export { Observable$isRunnable as default };
