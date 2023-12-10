/// <reference types="./Enumerable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, partial, pipe } from "../../../functions.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_scan = /*@__PURE__*/ (() => {
    const ScanEnumerator_acc = Symbol("ScanEnumerator_acc");
    const ScanEnumerator_delegate = Symbol("ScanEnumerator_delegate");
    const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");
    const createScanEnumerator = createInstanceFactory(mix(include(MutableEnumeratorMixin()), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(MutableEnumeratorMixin(), instance);
        instance[ScanEnumerator_reducer] = reducer;
        instance[ScanEnumerator_acc] = initialValue();
        instance[ScanEnumerator_delegate] = delegate;
        return instance;
    }, props({
        [ScanEnumerator_acc]: none,
        [ScanEnumerator_delegate]: none,
        [ScanEnumerator_reducer]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[ScanEnumerator_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            if (delegateHasCurrent) {
                this[ScanEnumerator_acc] = this[ScanEnumerator_reducer](this[ScanEnumerator_acc], delegate[EnumeratorLike_current]);
                this[EnumeratorLike_current] = this[ScanEnumerator_acc];
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (reducer, initialValue) => pipe(createScanEnumerator, partial(reducer, initialValue), Enumerable_lift);
})();
export default Enumerable_scan;
