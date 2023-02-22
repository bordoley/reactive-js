/// <reference types="./Sequence.toEnumerable.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
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
export default Sequence_toEnumerable;
