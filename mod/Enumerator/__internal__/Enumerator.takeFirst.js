/// <reference types="./Enumerator.takeFirst.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, TakeFirstLike_count, TakeFirstLike_takeCount, } from "../../__internal__/types.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function TakeFirstEnumerator(instance, delegate, takeCount) {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin(), instance);
        instance[TakeFirstLike_takeCount] = takeCount;
        instance[TakeFirstLike_count] = 0;
        return instance;
    }, props({
        [TakeFirstLike_takeCount]: 0,
        [TakeFirstLike_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const delegate = this[DelegatingLike_delegate];
            this[TakeFirstLike_count]++;
            if (this[TakeFirstLike_count] <= this[TakeFirstLike_takeCount] &&
                delegate[EnumeratorLike_move]()) {
                this[EnumeratorLike_current] = delegate[EnumeratorLike_current];
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return (delegate) => createTakeFirstEnumerator(delegate, count);
    };
})();
export default Enumerator_takeFirst;
