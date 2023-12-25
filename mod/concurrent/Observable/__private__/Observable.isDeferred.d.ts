import { DeferredObservableLike, ObservableLike } from "../../../concurrent.js";
declare const Observable_isDeferred: <T = unknown>(obs: ObservableLike<T>) => obs is DeferredObservableLike<T>;
export default Observable_isDeferred;
