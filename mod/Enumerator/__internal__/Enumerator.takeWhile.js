/// <reference types="./Enumerator.takeWhile.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, TakeWhileLike_inclusive, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_takeWhile = /*@__PURE__*/ (() => {
    const createTakeWhileEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin(), instance);
        instance[PredicatedLike_predicate] = predicate;
        instance[TakeWhileLike_inclusive] = inclusive;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
        [TakeWhileLike_inclusive]: none,
        // FIXME: Should use a symbol
        completed: false,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const delegate = this[DelegatingLike_delegate];
            if (!this.completed && delegate[EnumeratorLike_move]()) {
                const next = delegate[EnumeratorLike_current];
                const satisfiesPredicate = this[PredicatedLike_predicate](next);
                if (satisfiesPredicate || this[TakeWhileLike_inclusive]) {
                    this[EnumeratorLike_current] = next;
                }
                if (!satisfiesPredicate) {
                    this.completed = true;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        return (delegate) => createTakeWhileEnumerator(delegate, predicate, inclusive);
    };
})();
export default Enumerator_takeWhile;
