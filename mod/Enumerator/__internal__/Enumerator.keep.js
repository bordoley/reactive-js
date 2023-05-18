/// <reference types="./Enumerator.keep.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, } from "../../__internal__/types.js";
import { none, unsafeCast } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Enumerator_keep = /*@__PURE__*/ (() => {
    const createKeepEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
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
            const delegate = this[DelegatingLike_delegate];
            const predicate = this[PredicatedLike_predicate];
            while (delegate[EnumeratorLike_move]() &&
                !predicate(this[EnumeratorLike_current])) { }
            return delegate[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate) => (delegate) => createKeepEnumerator(delegate, predicate);
})();
export default Enumerator_keep;
