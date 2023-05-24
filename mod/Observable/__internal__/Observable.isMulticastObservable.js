/// <reference types="./Observable.isMulticastObservable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../types.js";
const Observable_isMulticastObservable = (obs) => !obs[ObservableLike_isDeferred] &&
    !obs[ObservableLike_isRunnable] &&
    !obs[ObservableLike_isEnumerable] &&
    obs[ObservableLike_isPure];
export default Observable_isMulticastObservable;
