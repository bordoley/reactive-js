/// <reference types="./Enumerator.createWithDelegate.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
const Enumerator_createWithDelegate = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Delegating_mixin(), Disposable_mixin), function CreateWithDelegateEnumerator(instance, delegate) {
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_mixin, instance);
    // Prevent the delegate from disposing the instance even in the case of
    // errors, so a user can define alternative error handling behavior.
    pipe(instance, Disposable_add(delegate, { ignoreChildErrors: true }));
    return instance;
}, props({}), {
    get [EnumeratorLike_current]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][EnumeratorLike_current];
    },
    get [EnumeratorLike_hasCurrent]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
    },
    get [EnumeratorLike_isCompleted]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][EnumeratorLike_isCompleted];
    },
    [EnumeratorLike_move]() {
        return this[DelegatingLike_delegate][EnumeratorLike_move]();
    },
})))();
export default Enumerator_createWithDelegate;
