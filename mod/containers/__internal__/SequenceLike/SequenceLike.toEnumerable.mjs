/// <reference types="./SequenceLike.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import EnumerableLike__create from '../../../ix/__internal__/EnumerableLike/EnumerableLike.create.mjs';
import MutableEnumeratorLike__mixin from '../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const SequenceLike__toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const createSequenceEnumerator = createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin), function SequenceEnumerator(instance, seq) {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.seq = seq;
        return instance;
    }, props({
        seq: none,
    }), {
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const next = this.seq();
                if (isSome(next)) {
                    this[EnumeratorLike_current] = next[SequenceLike_data];
                    this.seq = next[SequenceLike_next];
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    return () => (seq) => EnumerableLike__create(() => createSequenceEnumerator(seq));
})();

export { SequenceLike__toEnumerable as default };
