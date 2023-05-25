/// <reference types="./EnumerableBase.lift.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Observable_liftMixin from "../../Observable/__internal__/Observable.liftMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __LiftedEnumerable_ops } from "../../__internal__/symbols.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { none, pipeUnsafe } from "../../functions.js";
import { EnumerableLike_enumerate, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../types.js";
const createLiftedEnumerable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observable_liftMixin(), Delegating_mixin()), function LiftedEnumerable(instance, source, observerOps, enumeratorOps, isPure) {
        instance[__LiftedEnumerable_ops] = enumeratorOps;
        init(Observable_liftMixin(), instance, source, observerOps, {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isRunnable]: true,
            [ObservableLike_isPure]: isPure,
        });
        init(Delegating_mixin(), instance, source);
        return instance;
    }, props({
        [__LiftedEnumerable_ops]: none,
    }), {
        [ObservableLike_isEnumerable]: true,
        [EnumerableLike_enumerate]() {
            return pipeUnsafe(this[LiftedLike_source][EnumerableLike_enumerate](), ...this[__LiftedEnumerable_ops]);
        },
    }));
})();
const EnumerableBase_lift = ((observerOp, enumeratorOp, isPure) => source => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const observerOps = [
        observerOp,
        ...(source[LiftedLike_operators] ?? []),
    ];
    const enumeratorOps = [
        ...(source[__LiftedEnumerable_ops] ?? []),
        enumeratorOp,
    ];
    const isOpPure = sourceSource[ObservableLike_isPure] && isPure;
    return createLiftedEnumerable(sourceSource, observerOps, enumeratorOps, isOpPure);
});
export default EnumerableBase_lift;
