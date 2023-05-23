/// <reference types="./Enumerator.keep.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, } from "../../__internal__/types.js";
import { error, none, pipe, unsafeCast, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
const Enumerator_keep = /*@__PURE__*/ (() => {
    const createKeepEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_mixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        pipe(instance, Disposable_add(delegate));
        instance[PredicatedLike_predicate] = predicate;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
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
            const predicate = this[PredicatedLike_predicate];
            try {
                while (delegate[EnumeratorLike_move]() &&
                    !predicate(this[EnumeratorLike_current])) { }
            }
            catch (e) {
                // Catch errors thrown by the predicate
                this[DisposableLike_dispose](error(e));
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate) => (delegate) => createKeepEnumerator(delegate, predicate);
})();
export default Enumerator_keep;
