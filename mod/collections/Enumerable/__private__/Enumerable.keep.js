/// <reference types="./Enumerable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingEnumeratorMixin, { DelegatingEnumeratorMixinLike_delegate, } from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_keep = /*@__PURE__*/ (() => {
    const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");
    const createKeepEnumerator = createInstanceFactory(mix(include(DelegatingEnumeratorMixin()), function KeepEnumerator(instance, delegate, predicate) {
        init(DelegatingEnumeratorMixin(), instance, delegate);
        instance[KeepEnumerator_predicate] = predicate;
        return instance;
    }, props({
        [KeepEnumerator_predicate]: none,
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
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[DelegatingEnumeratorMixinLike_delegate];
            const predicate = this[KeepEnumerator_predicate];
            while (delegate[EnumeratorLike_move]() &&
                !predicate(this[EnumeratorLike_current])) { }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate) => pipe(createKeepEnumerator, partial(predicate), Enumerable_lift);
})();
export default Enumerable_keep;
