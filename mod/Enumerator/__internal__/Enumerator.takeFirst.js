/// <reference types="./Enumerator.takeFirst.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, TakeFirstLike_count, TakeFirstLike_takeCount, } from "../../__internal__/types.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_delegatingMixin), function TakeFirstEnumerator(instance, delegate, takeCount) {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_delegatingMixin, instance, delegate);
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
            else {
                this[DisposableLike_dispose]();
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
