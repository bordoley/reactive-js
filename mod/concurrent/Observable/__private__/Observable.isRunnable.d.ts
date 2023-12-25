import { ObservableLike, RunnableLike } from "../../../concurrent.js";
declare const Observable_isRunnable: <T = unknown>(obs: ObservableLike<T>) => obs is RunnableLike<T>;
export default Observable_isRunnable;
