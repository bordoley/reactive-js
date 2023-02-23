/// <reference types="./Enumerable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { error, none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, } from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedMutableEnumeratorMixin, delegatingMixin()), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        init(delegatingMixin(), instance, delegate);
        instance[ScanEnumerator_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
        }
        catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
        }
        return instance;
    }, props({
        [ScanEnumerator_reducer]: none,
    }), {
        [SourceLike_move]() {
            const acc = this[EnumeratorLike_hasCurrent]
                ? this[EnumeratorLike_current]
                : none;
            const { [DelegatingLike_delegate]: delegate, [ScanEnumerator_reducer]: reducer, } = this;
            if (acc === none) {
                return;
            }
            delegate[SourceLike_move]();
            if (!delegate[EnumeratorLike_hasCurrent]) {
                return;
            }
            try {
                this[EnumeratorLike_current] = reducer(acc, delegate[EnumeratorLike_current]);
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_scan(Enumerable_lift));
})();
export default Enumerable_scan;
