/// <reference types="./Enumerator.concatAll.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, HigherOrderEnumerator_inner, } from "../../__internal__/types.js";
import { none, pipe, returns } from "../../functions.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
import Enumerator_empty from "./Enumerator.empty.js";
const Enumerator_concatAll = /*@__PURE__*/ (() => returns(createInstanceFactory(mix(include(Delegating_mixin(), Disposable_mixin), function ConcatAllEnumerator(instance, delegate) {
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_mixin, instance);
    pipe(instance, Disposable_add(delegate));
    instance[HigherOrderEnumerator_inner] = Enumerator_empty();
    return instance;
}, props({
    [HigherOrderEnumerator_inner]: none,
    [EnumeratorLike_isCompleted]: false,
}), {
    get [EnumeratorLike_current]() {
        unsafeCast(this);
        return this[HigherOrderEnumerator_inner][EnumeratorLike_current];
    },
    get [EnumeratorLike_hasCurrent]() {
        unsafeCast(this);
        return this[HigherOrderEnumerator_inner][EnumeratorLike_hasCurrent];
    },
    [EnumeratorLike_move]() {
        if (this[EnumeratorLike_isCompleted]) {
            return false;
        }
        const delegate = this[DelegatingLike_delegate];
        let inner = this[HigherOrderEnumerator_inner];
        while (!inner[EnumeratorLike_move]()) {
            if (delegate[EnumeratorLike_move]()) {
                inner = delegate[EnumeratorLike_current];
                pipe(this, Disposable_add(inner));
                this[HigherOrderEnumerator_inner] = inner;
            }
            else {
                this[DisposableLike_dispose]();
                inner = Enumerator_empty();
                this[HigherOrderEnumerator_inner] = inner;
                break;
            }
        }
        this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
        return this[EnumeratorLike_hasCurrent];
    },
}))))();
export default Enumerator_concatAll;
