/// <reference types="./Enumerable.scan.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_scan from '../../../containers/__internal__/StatefulContainer/StatefulContainer.scan.mjs';
import { pipe, error, none } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");
    const ScanEnumerator_delegate = Symbol("ScanEnumerator_delegate");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance[ScanEnumerator_delegate] = delegate;
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
        [ScanEnumerator_delegate]: none,
    }), {
        [SourceLike_move]() {
            const acc = this[EnumeratorLike_hasCurrent]
                ? this[EnumeratorLike_current]
                : none;
            const { [ScanEnumerator_delegate]: delegate, [ScanEnumerator_reducer]: reducer, } = this;
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
    })), StatefulContainer_scan(Enumerable_liftT));
})();

export { Enumerable_scan as default };
