/// <reference types="./Enumerable.pairwise.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, isSome, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable$lift from './Enumerable.lift.mjs';

const Enumerable$pairwise = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedMutableEnumeratorMixin), function PairwiseEnumerator(instance, delegate) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
    }), {
        [SourceLike_move]() {
            const { delegate } = this;
            const prev = Enumerator$hasCurrent(this)
                ? Enumerator$getCurrent(this)[1]
                : Enumerator$move(delegate)
                    ? Enumerator$getCurrent(delegate)
                    : none;
            if (isSome(prev) && Enumerator$move(delegate)) {
                const current = Enumerator$getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
            else {
                pipe(this, Disposable$dispose());
            }
        },
    })), Enumerable$lift, returns);
})();

export { Enumerable$pairwise as default };
