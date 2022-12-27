/// <reference types="./SequenceLike.toEnumerable.d.ts" />
import { createInstanceFactory, mixin, include, init, props } from '../../../__internal__/mixins.mjs';
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import create from '../../../ix/__internal__/EnumerableLike/EnumerableLike.create.mjs';
import mutableMixin from '../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableMixin();
    const createSequenceEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function SequenceEnumerator(instance, seq) {
        init(disposableMixin, instance);
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
    return () => (seq) => create(() => createSequenceEnumerator(seq));
})();

export { toEnumerable as default };
