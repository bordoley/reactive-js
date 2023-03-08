/// <reference types="./Sequence.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none, returns } from "../../../functions.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
const Sequence_enumerate = /*@__PURE__*/ (() => {
    const SequenceEnumerator_sequence = Symbol("SequenceEnumerator_sequence");
    const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function SequenceEnumerator(instance, seq) {
        init(MutableEnumerator_mixin(), instance);
        instance[SequenceEnumerator_sequence] = seq;
        return instance;
    }, props({
        [SequenceEnumerator_sequence]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const result = this[SequenceEnumerator_sequence]();
            if (isSome(result)) {
                const data = result[SequenceLike_data];
                this[EnumeratorLike_current] = data;
                const next = result[SequenceLike_next];
                this[SequenceEnumerator_sequence] = next;
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return returns(createEnumerator);
})();
export default Sequence_enumerate;
