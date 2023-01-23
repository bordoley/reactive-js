/// <reference types="./EnumerableLike.scan.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__scan from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import { pipe, error, none, isSome } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.reducer = reducer;
        try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
        }
        catch (e) {
            pipe(instance, DisposableLike__dispose(error(e)));
        }
        return instance;
    }, props({ reducer: none, delegate: none }), {
        [SourceLike_move]() {
            const acc = EnumeratorLike__hasCurrent(this)
                ? EnumeratorLike__getCurrent(this)
                : none;
            const { delegate, reducer } = this;
            if (isSome(acc) && EnumeratorLike__move(delegate)) {
                try {
                    this[EnumeratorLike_current] = reducer(acc, EnumeratorLike__getCurrent(delegate));
                }
                catch (e) {
                    pipe(this, DisposableLike__dispose(error(e)));
                }
            }
        },
    })), StatefulContainerLike__scan(EnumerableLike__liftT));
})();

export { EnumerableLike__scan as default };
