/// <reference types="./Enumerator.takeWhile.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, TakeWhileLike_inclusive, } from "../../__internal__/types.js";
import { error, none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_takeWhile = /*@__PURE__*/ (() => {
    const createTakeWhileEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_mixin), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_mixin, instance, delegate);
        pipe(instance, Disposable_add(delegate));
        instance[PredicatedLike_predicate] = predicate;
        instance[TakeWhileLike_inclusive] = inclusive;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
        [TakeWhileLike_inclusive]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[DelegatingLike_delegate];
            try {
                if (delegate[EnumeratorLike_move]()) {
                    const next = delegate[EnumeratorLike_current];
                    const satisfiesPredicate = this[PredicatedLike_predicate](next);
                    if (satisfiesPredicate || this[TakeWhileLike_inclusive]) {
                        this[EnumeratorLike_current] = next;
                    }
                    if (!satisfiesPredicate) {
                        this[DisposableLike_dispose]();
                    }
                }
            }
            catch (e) {
                // catch errors thrown by the predicate
                this[DisposableLike_dispose](error(e));
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        return (delegate) => createTakeWhileEnumerator(delegate, predicate, inclusive);
    };
})();
export default Enumerator_takeWhile;
