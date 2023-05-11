/// <reference types="./Observable.isSharedObservable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const Observable_isSharedObservable = (obs) => !obs[ObservableLike_isDeferred] &&
    !obs[ObservableLike_isRunnable] &&
    !obs[ObservableLike_isEnumerable];
export default Observable_isSharedObservable;
