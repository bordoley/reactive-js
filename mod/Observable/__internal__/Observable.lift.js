/// <reference types="./Observable.lift.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_liftMixin from "./Observable.liftMixin.js";
const Observable_lift = (() => {
    const createLiftedObservable = createInstanceFactory(Observable_liftMixin());
    return (config) => (operator) => source => {
        const sourceSource = source[LiftedLike_source] ?? source;
        const allFunctions = [
            operator,
            ...(source[LiftedLike_operators] ?? []),
        ];
        const isLiftedEnumerable = config[ObservableLike_isEnumerable] &&
            sourceSource[ObservableLike_isEnumerable];
        const isLiftedRunnable = (config[ObservableLike_isEnumerable] ||
            config[ObservableLike_isRunnable]) &&
            sourceSource[ObservableLike_isRunnable];
        const isLiftedDeferred = sourceSource[ObservableLike_isDeferred];
        return createLiftedObservable(sourceSource, allFunctions, {
            [ObservableLike_isDeferred]: isLiftedDeferred,
            [ObservableLike_isRunnable]: isLiftedRunnable,
            [ObservableLike_isEnumerable]: isLiftedEnumerable,
        });
    };
})();
export default Observable_lift;
