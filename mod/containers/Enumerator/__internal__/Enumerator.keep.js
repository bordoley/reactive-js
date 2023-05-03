/// <reference types="./Enumerator.keep.d.ts" />

import { PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import { none, unsafeCast } from "../../../functions.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
const Enumerator_keep = 
/*@__PURE__*/ (() => {
    const createKeepEnumerator = createInstanceFactory(mix(include(Delegating_mixin()), function KeepEnumerator(instance, delegate, predicate) {
        init(Delegating_mixin(), instance, delegate);
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
            while ((delegate[EnumeratorLike_move](),
                delegate[EnumeratorLike_hasCurrent]) &&
                !predicate(this[EnumeratorLike_current])) { }
            return delegate[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate) => (delegate) => createKeepEnumerator(delegate, predicate);
})();
export default Enumerator_keep;
