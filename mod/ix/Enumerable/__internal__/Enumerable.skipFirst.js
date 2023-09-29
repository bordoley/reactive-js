/// <reference types="./Enumerable.skipFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DelegatingDisposableLike_delegate, DisposableLike_isDisposed, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_skipFirst = /*@__PURE__*/ (() => {
    const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");
    const createSkipFirstEnumerator = createInstanceFactory(mix(include(DelegatingDisposableMixin()), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[SkipFirstEnumerator_count] = clampPositiveInteger(skipCount ?? 1);
        return instance;
    }, props({
        [SkipFirstEnumerator_count]: 0,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[DelegatingDisposableLike_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingDisposableLike_delegate][EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[DelegatingDisposableLike_delegate];
            this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];
            while (delegate[EnumeratorLike_move]()) {
                this[SkipFirstEnumerator_count] = max(this[SkipFirstEnumerator_count] - 1, -1);
                if (this[SkipFirstEnumerator_count] < 0) {
                    break;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (options = {}) => pipe(createSkipFirstEnumerator, partial(options.count), Enumerable_lift);
})();
export default Enumerable_skipFirst;
