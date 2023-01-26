/// <reference types="./Sequence.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable$create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator$mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Sequence$toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const createSequenceEnumerator = createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function SequenceEnumerator(instance, seq) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.seq = seq;
        return instance;
    }, props({
        seq: none,
    }), {
        [SourceLike_move]() {
            if (!Disposable$isDisposed(this)) {
                const next = this.seq();
                if (isSome(next)) {
                    this[EnumeratorLike_current] = next[SequenceLike_data];
                    this.seq = next[SequenceLike_next];
                }
                else {
                    pipe(this, Disposable$dispose());
                }
            }
        },
    }));
    return () => (seq) => Enumerable$create(() => createSequenceEnumerator(seq));
})();

export { Sequence$toEnumerable as default };
