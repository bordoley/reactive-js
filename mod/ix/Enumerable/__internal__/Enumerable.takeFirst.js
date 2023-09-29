/// <reference types="./Enumerable.takeFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_takeFirst = /*@__PURE__*/ (() => {
    const TakeFirstEnumerator_count = Symbol("TakeFirstEnumerator_count");
    const createTakeFirstEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_delegatingMixin()), function TakeFirstEnumerator(instance, delegate, takeCount) {
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[TakeFirstEnumerator_count] = clampPositiveInteger(takeCount ?? 1);
        if (takeCount === 0) {
            instance[DisposableLike_dispose]();
        }
        return instance;
    }, props({
        [TakeFirstEnumerator_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];
            this[TakeFirstEnumerator_count] = max(this[TakeFirstEnumerator_count] - 1, -1);
            const delegate = this[DelegatingDisposableLike_delegate];
            if (this[TakeFirstEnumerator_count] >= 0 &&
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
    return (options = {}) => pipe(createTakeFirstEnumerator, partial(options.count), Enumerable_lift);
})();
export default Enumerable_takeFirst;
