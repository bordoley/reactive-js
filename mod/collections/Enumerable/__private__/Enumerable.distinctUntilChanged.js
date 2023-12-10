/// <reference types="./Enumerable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import DelegatingEnumeratorMixin, { DelegatingEnumeratorMixinLike_delegate, } from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const DistinctUntilChangedEnumerator_equality = Symbol("DistinctUntilChangedEnumerator_equality");
    const DistinctUntilChangedEnumerator_prev = Symbol("DistinctUntilChangedEnumerator_prev");
    const DistinctUntilChangedEnumerator_hasValue = Symbol("DistinctUntilChangedEnumerator_hasValue");
    const createDistinctUntilChangedEnumerator = createInstanceFactory(mix(include(DelegatingEnumeratorMixin()), function DistinctUntilChangedEnumerator(instance, delegate, equality) {
        init(DelegatingEnumeratorMixin(), instance, delegate);
        instance[DistinctUntilChangedEnumerator_equality] =
            equality ?? strictEquality;
        return instance;
    }, props({
        [DistinctUntilChangedEnumerator_equality]: none,
        [DistinctUntilChangedEnumerator_hasValue]: false,
        [DistinctUntilChangedEnumerator_prev]: none,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[DelegatingEnumeratorMixinLike_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingEnumeratorMixinLike_delegate][EnumeratorLike_hasCurrent];
        },
        get [EnumeratorLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingEnumeratorMixinLike_delegate][EnumeratorLike_isCompleted];
        },
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[DelegatingEnumeratorMixinLike_delegate];
            const equality = this[DistinctUntilChangedEnumerator_equality];
            while (delegate[EnumeratorLike_move]()) {
                const next = delegate[EnumeratorLike_current];
                if (!this[DistinctUntilChangedEnumerator_hasValue] ||
                    !equality(this[DistinctUntilChangedEnumerator_prev], next)) {
                    this[DistinctUntilChangedEnumerator_prev] = next;
                    this[DistinctUntilChangedEnumerator_hasValue] = true;
                    break;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (options) => pipe(createDistinctUntilChangedEnumerator, partial(options?.equality), Enumerable_lift);
})();
export default Enumerable_distinctUntilChanged;
