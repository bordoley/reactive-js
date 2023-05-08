import { DeferredObservableLike, ObservableLike } from "../../../core.js";
declare const Observable_isDeferred: (obs: ObservableLike) => obs is DeferredObservableLike<unknown>;
export default Observable_isDeferred;
