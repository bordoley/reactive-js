/// <reference types="./Sequence.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable_create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator_mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Sequence_toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const SequenceEnumerator_seq = Symbol("SequenceEnumerator_seq");
    const createSequenceEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function SequenceEnumerator(instance, seq) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[SequenceEnumerator_seq] = seq;
        return instance;
    }, props({
        [SequenceEnumerator_seq]: none,
    }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                const next = this[SequenceEnumerator_seq]();
                if (isSome(next)) {
                    this[EnumeratorLike_current] = next[SequenceLike_data];
                    this[SequenceEnumerator_seq] = next[SequenceLike_next];
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
    }));
    return () => (seq) => Enumerable_create(() => createSequenceEnumerator(seq));
})();

export { Sequence_toEnumerable as default };
