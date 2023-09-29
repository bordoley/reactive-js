/// <reference types="./Enumerable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_scan = /*@__PURE__*/ (() => {
    const ScanEnumerator_acc = Symbol("ScanEnumerator_acc");
    const ScanEnumerator_delegate = Symbol("ScanEnumerator_delegate");
    const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");
    const createScanEnumerator = createInstanceFactory(mix(include(MutableEnumeratorMixin(), DisposableMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(MutableEnumeratorMixin(), instance);
        init(DisposableMixin, instance);
        pipe(instance, Disposable.add(delegate));
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
            this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];
            const delegate = this[ScanEnumerator_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            try {
                if (delegateHasCurrent) {
                    this[ScanEnumerator_acc] = this[ScanEnumerator_reducer](this[ScanEnumerator_acc], delegate[EnumeratorLike_current]);
                    this[EnumeratorLike_current] = this[ScanEnumerator_acc];
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
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (reducer, initialValue) => pipe(createScanEnumerator, partial(reducer, initialValue), Enumerable_lift);
})();
export default Enumerable_scan;
