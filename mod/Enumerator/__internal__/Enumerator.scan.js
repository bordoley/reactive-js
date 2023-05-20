/// <reference types="./Enumerator.scan.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, } from "../../__internal__/types.js";
import { error, none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_scan = /*@__PURE__*/ (() => {
    const createScanEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_mixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(MutableEnumerator_mixin(), instance);
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        pipe(instance, Disposable_add(delegate));
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
            try {
                if (delegateHasCurrent) {
                    this[ReducerAccumulatorLike_acc] = this[ReducerAccumulatorLike_reducer](this[ReducerAccumulatorLike_acc], delegate[EnumeratorLike_current]);
                    this[EnumeratorLike_current] = this[ReducerAccumulatorLike_acc];
                }
            }
            catch (e) {
                // catch errors thrown by the reducer
                this[DisposableLike_dispose](error(e));
                this[MutableEnumeratorLike_reset]();
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (reducer, initialValue) => (delegate) => createScanEnumerator(delegate, reducer, initialValue);
})();
export default Enumerator_scan;
