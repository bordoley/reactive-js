/// <reference types="./Enumerable.skipFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingEnumeratorMixin, { DelegatingEnumeratorMixinLike_delegate, } from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_skipFirst = /*@__PURE__*/ (() => {
    const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");
    const createSkipFirstEnumerator = mixInstanceFactory(include(DelegatingEnumeratorMixin()), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(DelegatingEnumeratorMixin(), instance, delegate);
        instance[SkipFirstEnumerator_count] = clampPositiveInteger(skipCount ?? 1);
        return instance;
    }, props({
        [SkipFirstEnumerator_count]: 0,
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
            while (delegate[EnumeratorLike_move]()) {
                this[SkipFirstEnumerator_count] = max(this[SkipFirstEnumerator_count] - 1, -1);
                if (this[SkipFirstEnumerator_count] < 0) {
                    break;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    });
    return (options = {}) => pipe(createSkipFirstEnumerator, partial(options.count), Enumerable_lift);
})();
export default Enumerable_skipFirst;
