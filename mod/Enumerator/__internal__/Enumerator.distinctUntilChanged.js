/// <reference types="./Enumerator.distinctUntilChanged.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, DistinctUntilChangedLike_equality, DistinctUntilChangedLike_hasValue, DistinctUntilChangedLike_prev, } from "../../__internal__/types.js";
import { error, none, pipe, strictEquality, unsafeCast, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
const Enumerator_distinctUntilChanged = /*@__PURE__*/ (() => {
    const createDistinctUntilChangedEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_mixin), function DistinctUntilChangedEnumerator(instance, delegate, equality) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        pipe(instance, Disposable_add(delegate));
        instance[DistinctUntilChangedLike_equality] = equality;
        return instance;
    }, props({
        [DistinctUntilChangedLike_equality]: none,
        [DistinctUntilChangedLike_prev]: none,
        [DistinctUntilChangedLike_hasValue]: false,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[DelegatingLike_delegate];
            const equality = this[DistinctUntilChangedLike_equality];
            try {
                while (delegate[EnumeratorLike_move]()) {
                    const next = delegate[EnumeratorLike_current];
                    if (!this[DistinctUntilChangedLike_hasValue] ||
                        !equality(this[DistinctUntilChangedLike_prev], next)) {
                        this[DistinctUntilChangedLike_prev] = next;
                        this[DistinctUntilChangedLike_hasValue] = true;
                        break;
                    }
                }
            }
            catch (e) {
                // Catch errors thrown by the equality function
                this[DisposableLike_dispose](error(e));
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (options = {}) => {
        const { equality = strictEquality } = options ?? {};
        return (delegate) => createDistinctUntilChangedEnumerator(delegate, equality);
    };
})();
export default Enumerator_distinctUntilChanged;
