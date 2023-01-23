/// <reference types="./EnumerableLike.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__throwIfEmpty from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import DisposableLike__addIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import DelegatingEnumeratorLike__mixin from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import DelegatingEnumeratorLike__move from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__mixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, factory) {
        init(DisposableLike__mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.isEmpty = true;
        pipe(instance, DisposableLike__addIgnoringChildErrors(delegate));
        pipe(delegate, DisposableLike__onComplete(() => {
            let err = none;
            if (instance.isEmpty) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            pipe(instance, DisposableLike__dispose(err));
        }));
        return instance;
    }, props({
        isEmpty: true,
    }), {
        [SourceLike_move]() {
            if (DelegatingEnumeratorLike__move(this)) {
                this.isEmpty = false;
            }
        },
    })), StatefulContainerLike__throwIfEmpty(EnumerableLike__liftT));
})();

export { EnumerableLike__throwIfEmpty as default };
