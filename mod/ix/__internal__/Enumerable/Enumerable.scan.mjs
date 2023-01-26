/// <reference types="./Enumerable.scan.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_scan from '../../../containers/__internal__/StatefulContainer/StatefulContainer.scan.mjs';
import { pipe, error, none, isSome } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator_move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.reducer = reducer;
        try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
        }
        catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
        }
        return instance;
    }, props({ reducer: none, delegate: none }), {
        [SourceLike_move]() {
            const acc = Enumerator_hasCurrent(this)
                ? Enumerator_getCurrent(this)
                : none;
            const { delegate, reducer } = this;
            if (isSome(acc) && Enumerator_move(delegate)) {
                try {
                    this[EnumeratorLike_current] = reducer(acc, Enumerator_getCurrent(delegate));
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                }
            }
        },
    })), StatefulContainer_scan(Enumerable_liftT));
})();

export { Enumerable_scan as default };
