/// <reference types="./EnumerableLike.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__takeWhile from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DelegatingEnumeratorLike__mixin from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import DelegatingEnumeratorLike__move from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        instance.inclusive = inclusive;
        return instance;
    }, props({
        predicate: none,
        inclusive: false,
        done: false,
    }), {
        [SourceLike_move]() {
            const { inclusive, predicate } = this;
            if (this.done && !DisposableLike__isDisposed(this)) {
                pipe(this, DisposableLike__dispose());
            }
            else if (DelegatingEnumeratorLike__move(this)) {
                const current = EnumeratorLike__getCurrent(this);
                try {
                    const satisfiesPredicate = predicate(current);
                    if (!satisfiesPredicate && inclusive) {
                        this.done = true;
                    }
                    else if (!satisfiesPredicate) {
                        pipe(this, DisposableLike__dispose());
                    }
                }
                catch (cause) {
                    pipe(this, DisposableLike__dispose({ cause }));
                }
            }
        },
    })), StatefulContainerLike__takeWhile(EnumerableLike__liftT));
})();

export { EnumerableLike__takeWhile as default };
