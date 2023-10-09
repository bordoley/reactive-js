/// <reference types="./Enumerable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, partial, pipe, } from "../../../functions.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_takeWhile = /*@__PURE__*/ (() => {
    const TakeWhileEnumerator_delegate = Symbol("TakeWhileEnumerator_delegate");
    const TakeWhileEnumerator_inclusive = Symbol("TakeWhileEnumerator_inclusive");
    const TakeWhileEnumerator_predicate = Symbol("TakeWhileEnumerator_predicate");
    const createTakeWhileEnumerator = createInstanceFactory(mix(include(MutableEnumeratorMixin()), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(MutableEnumeratorMixin(), instance);
        instance[TakeWhileEnumerator_delegate] = delegate;
        instance[TakeWhileEnumerator_inclusive] = inclusive ?? false;
        instance[TakeWhileEnumerator_predicate] = predicate;
        return instance;
    }, props({
        [TakeWhileEnumerator_delegate]: none,
        [TakeWhileEnumerator_inclusive]: false,
        [TakeWhileEnumerator_predicate]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[TakeWhileEnumerator_delegate];
            if (delegate[EnumeratorLike_move]()) {
                const next = delegate[EnumeratorLike_current];
                const satisfiesPredicate = this[TakeWhileEnumerator_predicate](next);
                if (satisfiesPredicate || this[TakeWhileEnumerator_inclusive]) {
                    this[EnumeratorLike_current] = next;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate, options = {}) => pipe(createTakeWhileEnumerator, partial(predicate, options.inclusive), Enumerable_lift);
})();
export default Enumerable_takeWhile;
