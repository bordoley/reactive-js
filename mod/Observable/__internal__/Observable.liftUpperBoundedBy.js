/// <reference types="./Observable.liftUpperBoundedBy.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_createLifted from "./Observable.createLifted.js";
const Observable_liftUpperBoundedBy = (config) => (operator) => (source) => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    const isEnumerable = config[ObservableLike_isEnumerable] &&
        sourceSource[ObservableLike_isEnumerable];
    const isRunnable = isEnumerable ||
        (config[ObservableLike_isRunnable] &&
            sourceSource[ObservableLike_isRunnable]);
    const isDeferredObservable = isRunnable ||
        (config[ObservableLike_isDeferred] &&
            sourceSource[ObservableLike_isDeferred]);
    const liftedConfig = {
        [ObservableLike_isEnumerable]: isEnumerable,
        [ObservableLike_isRunnable]: isRunnable,
        [ObservableLike_isDeferred]: isDeferredObservable,
    };
    return Observable_createLifted(sourceSource, allFunctions, liftedConfig);
};
export default Observable_liftUpperBoundedBy;
