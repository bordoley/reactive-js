/// <reference types="./Enumerable.pairwise.d.ts" />
import { createInstanceFactory, mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { pipe, none, isSome, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator_move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_lift from './Enumerable.lift.mjs';

const Enumerable_pairwise = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedMutableEnumeratorMixin), function PairwiseEnumerator(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, props({}), {
        [SourceLike_move]() {
            const { [DelegatingLike_delegate]: delegate } = this;
            const prev = Enumerator_hasCurrent(this)
                ? Enumerator_getCurrent(this)[1]
                : Enumerator_move(delegate)
                    ? Enumerator_getCurrent(delegate)
                    : none;
            if (isSome(prev) && Enumerator_move(delegate)) {
                const current = Enumerator_getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
            else {
                pipe(this, Disposable_dispose());
            }
        },
    })), Enumerable_lift, returns);
})();

export { Enumerable_pairwise as default };
