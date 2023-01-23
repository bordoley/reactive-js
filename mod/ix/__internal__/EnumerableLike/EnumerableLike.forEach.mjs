/// <reference types="./EnumerableLike.forEach.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__forEach from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DelegatingEnumeratorLike__mixin from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import DelegatingEnumeratorLike__move from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__forEach = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function forEachEnumerator(instance, delegate, effect) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.effect = effect;
        return instance;
    }, props({ effect: none }), {
        [SourceLike_move]() {
            if (DelegatingEnumeratorLike__move(this)) {
                try {
                    this.effect(EnumeratorLike__getCurrent(this));
                }
                catch (e) {
                    pipe(this, DisposableLike__dispose(error(e)));
                }
            }
        },
    })), StatefulContainerLike__forEach(EnumerableLike__liftT));
})();

export { EnumerableLike__forEach as default };
