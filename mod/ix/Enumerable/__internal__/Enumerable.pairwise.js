/// <reference types="./Enumerable.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_pairwise = /*@__PURE__*/ (() => {
    const PairwiseEnumerator_hasPrev = Symbol("PairwiseEnumerator_hasPrev");
    const PairwiseEnumerator_prev = Symbol("PairwiseEnumerator_prev");
    const createPairwiseEnumerator = createInstanceFactory(mix(include(MutableEnumeratorMixin(), DelegatingDisposableMixin()), function PairwiseEnumerator(instance, delegate) {
        init(MutableEnumeratorMixin(), instance);
        init(DelegatingDisposableMixin(), instance, delegate);
        return instance;
    }, props({
        [PairwiseEnumerator_hasPrev]: false,
        [PairwiseEnumerator_prev]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[DelegatingDisposableLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            if (delegateHasCurrent && this[PairwiseEnumerator_hasPrev]) {
                const next = delegate[EnumeratorLike_current];
                this[EnumeratorLike_current] = [
                    this[PairwiseEnumerator_prev],
                    next,
                ];
                this[PairwiseEnumerator_prev] = next;
                return true;
            }
            else if (delegateHasCurrent) {
                this[PairwiseEnumerator_prev] = delegate[EnumeratorLike_current];
                this[PairwiseEnumerator_hasPrev] = true;
                return this[EnumeratorLike_move]();
            }
            else {
                this[EnumeratorLike_isCompleted] = true;
                return false;
            }
        },
    }));
    return pipe(createPairwiseEnumerator, Enumerable_lift, returns);
})();
export default Enumerable_pairwise;
