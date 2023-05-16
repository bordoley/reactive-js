/// <reference types="./Enumerator.scan.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_scan = /*@__PURE__*/ (() => {
    const createScanEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Delegating_mixin()), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(MutableEnumerator_mixin(), instance);
        init(Delegating_mixin(), instance, delegate);
        instance[ReducerAccumulatorLike_reducer] = reducer;
        instance[ReducerAccumulatorLike_acc] = initialValue();
        return instance;
    }, props({
        [ReducerAccumulatorLike_acc]: none,
        [ReducerAccumulatorLike_reducer]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const delegate = this[DelegatingLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            if (delegateHasCurrent) {
                this[ReducerAccumulatorLike_acc] = this[ReducerAccumulatorLike_reducer](this[ReducerAccumulatorLike_acc], delegate[EnumeratorLike_current]);
                this[EnumeratorLike_current] = this[ReducerAccumulatorLike_acc];
            }
            return delegateHasCurrent;
        },
    }));
    return (reducer, initialValue) => (delegate) => createScanEnumerator(delegate, reducer, initialValue);
})();
export default Enumerator_scan;
