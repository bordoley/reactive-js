import { ObservableLike, RunnableObservableLike } from "../../../rx.mjs";
declare const isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike<unknown>;
export { isRunnable as default };
