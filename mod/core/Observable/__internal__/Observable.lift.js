/// <reference types="./Observable.lift.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../../__internal__/core.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
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
        return createLiftedObservable(sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
    };
})();
export default Observable_lift;
