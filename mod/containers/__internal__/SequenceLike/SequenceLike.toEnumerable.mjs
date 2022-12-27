/// <reference types="./SequenceLike.toEnumerable.d.ts" />
import { create } from '../../../__internal__/ix/EnumerableLike.create.mjs';
import { mutableEnumeratorMixin } from '../../../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../../../__internal__/mixins.mjs';
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
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
