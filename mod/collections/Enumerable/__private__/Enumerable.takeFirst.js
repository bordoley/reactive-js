/// <reference types="./Enumerable.takeFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingEnumeratorMixin, { DelegatingEnumeratorMixinLike_delegate, } from "../../__mixins__/DelegatingEnumeratorMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_takeFirst = /*@__PURE__*/ (() => {
    const TakeFirstEnumerator_count = Symbol("TakeFirstEnumerator_count");
    const createTakeFirstEnumerator = mixInstanceFactory(include(MutableEnumeratorMixin(), DelegatingEnumeratorMixin()), function TakeFirstEnumerator(instance, delegate, takeCount) {
        init(MutableEnumeratorMixin(), instance);
        init(DelegatingEnumeratorMixin(), instance, delegate);
        instance[TakeFirstEnumerator_count] = clampPositiveInteger(takeCount ?? 1);
        return instance;
    }, props({
        [TakeFirstEnumerator_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            this[TakeFirstEnumerator_count] = max(this[TakeFirstEnumerator_count] - 1, -1);
            const delegate = this[DelegatingEnumeratorMixinLike_delegate];
            if (this[TakeFirstEnumerator_count] >= 0 &&
                delegate[EnumeratorLike_move]()) {
                this[EnumeratorLike_current] = delegate[EnumeratorLike_current];
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    });
    return (options = {}) => pipe(createTakeFirstEnumerator, partial(options.count), Enumerable_lift);
})();
export default Enumerable_takeFirst;
