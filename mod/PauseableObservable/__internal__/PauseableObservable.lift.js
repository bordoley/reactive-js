/// <reference types="./PauseableObservable.lift.d.ts" />

import Observable_liftMixin from "../../Observable/__internal__/Observable.liftMixin.js";
import Pauseable_delegatingMixin from "../../Pauseable/__internal__/Pauseable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, } from "../../__internal__/mixins.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const createLiftedPauseableObservable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observable_liftMixin(), Pauseable_delegatingMixin), function LiftedPauseableObservable(instance, source, ops) {
        init(Observable_liftMixin(), instance, source, ops, {
            [ObservableLike_isDeferred]: false,
            [ObservableLike_isEnumerable]: false,
            [ObservableLike_isRunnable]: false,
        });
        init(Pauseable_delegatingMixin, instance, source);
        return instance;
    }));
})();
const PauseableObservable_lift = (operator) => source => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    return createLiftedPauseableObservable(sourceSource, allFunctions);
};
export default PauseableObservable_lift;
