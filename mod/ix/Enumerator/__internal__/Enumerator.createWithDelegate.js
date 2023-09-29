/// <reference types="./Enumerator.createWithDelegate.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
const CreateWithDelegateEnumerator_delegate = Symbol("CreateWithDelegateEnumerator_delegate");
const Enumerator_createWithDelegate = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin), function CreateWithDelegateEnumerator(instance, delegate) {
    init(Disposable_mixin, instance);
    instance[CreateWithDelegateEnumerator_delegate] = delegate;
    // Prevent the delegate from disposing the instance even in the case of
    // errors, so a user can define alternative error handling behavior.
    pipe(instance, Disposable.add(delegate, { ignoreChildErrors: true }));
    return instance;
}, props({
    [CreateWithDelegateEnumerator_delegate]: none,
}), {
    get [EnumeratorLike_current]() {
        unsafeCast(this);
        return this[CreateWithDelegateEnumerator_delegate][EnumeratorLike_current];
    },
    get [EnumeratorLike_hasCurrent]() {
        unsafeCast(this);
        return this[CreateWithDelegateEnumerator_delegate][EnumeratorLike_hasCurrent];
    },
    get [EnumeratorLike_isCompleted]() {
        unsafeCast(this);
        return this[CreateWithDelegateEnumerator_delegate][EnumeratorLike_isCompleted];
    },
    [EnumeratorLike_move]() {
        return this[CreateWithDelegateEnumerator_delegate][EnumeratorLike_move]();
    },
})))();
export default Enumerator_createWithDelegate;
