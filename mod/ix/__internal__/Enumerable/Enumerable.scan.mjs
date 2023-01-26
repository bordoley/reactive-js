/// <reference types="./Enumerable.scan.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$scan from '../../../containers/__internal__/StatefulContainer/StatefulContainer.scan.mjs';
import { pipe, error, none, isSome } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.reducer = reducer;
        try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
        }
        catch (e) {
            pipe(instance, Disposable$dispose(error(e)));
        }
        return instance;
    }, props({ reducer: none, delegate: none }), {
        [SourceLike_move]() {
            const acc = Enumerator$hasCurrent(this)
                ? Enumerator$getCurrent(this)
                : none;
            const { delegate, reducer } = this;
            if (isSome(acc) && Enumerator$move(delegate)) {
                try {
                    this[EnumeratorLike_current] = reducer(acc, Enumerator$getCurrent(delegate));
                }
                catch (e) {
                    pipe(this, Disposable$dispose(error(e)));
                }
            }
        },
    })), StatefulContainer$scan(Enumerable$liftT));
})();

export { Enumerable$scan as default };
