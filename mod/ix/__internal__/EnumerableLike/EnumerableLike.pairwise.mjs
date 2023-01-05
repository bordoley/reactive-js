/// <reference types="./EnumerableLike.pairwise.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, isSome, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__lift from './EnumerableLike.lift.mjs';

const EnumerableLike__pairwise = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin), function PairwiseEnumerator(instance, delegate) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
    }), {
        [SourceLike_move]() {
            const { delegate } = this;
            const prev = EnumeratorLike__hasCurrent(this)
                ? EnumeratorLike__getCurrent(this)[1]
                : EnumeratorLike__move(delegate)
                    ? EnumeratorLike__getCurrent(delegate)
                    : none;
            if (isSome(prev) && EnumeratorLike__move(delegate)) {
                const current = EnumeratorLike__getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
            else {
                pipe(this, DisposableLike__dispose());
            }
        },
    })), EnumerableLike__lift, returns);
})();

export { EnumerableLike__pairwise as default };
