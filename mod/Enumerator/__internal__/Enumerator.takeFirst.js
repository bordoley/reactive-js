/// <reference types="./Enumerator.takeFirst.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { max } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { CountingLike_count, DelegatingLike_delegate, } from "../../__internal__/types.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_delegatingMixin), function TakeFirstEnumerator(instance, delegate, takeCount) {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[CountingLike_count] = takeCount;
        if (takeCount === 0) {
            instance[DisposableLike_dispose]();
        }
        return instance;
    }, props({
        [CountingLike_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            this[MutableEnumeratorLike_reset]();
            this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];
            this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);
            const delegate = this[DelegatingLike_delegate];
            if (this[CountingLike_count] >= 0 &&
                delegate[EnumeratorLike_move]()) {
                this[EnumeratorLike_current] = delegate[EnumeratorLike_current];
            }
            else {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (count) => (delegate) => createTakeFirstEnumerator(delegate, count);
})();
export default Enumerator_takeFirst;
