/// <reference types="./Enumerator.concatAll.d.ts" />

import { createInstanceFactory, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, returns } from "../../../functions.js";
import Enumerator_empty from "./Enumerator.empty.js";
const ConcatAllEnumerator_inner = Symbol("ConcatAllEnumerator_inner");
const ConcatAllEnumerator_delegate = Symbol("ConcatAllEnumerator_delegate");
const Enumerator_concatAll = /*@__PURE__*/ (() => returns(createInstanceFactory(mix(function ConcatAllEnumerator(instance, delegate) {
    instance[ConcatAllEnumerator_delegate] = delegate;
    instance[ConcatAllEnumerator_inner] = Enumerator_empty();
    return instance;
}, props({
    [ConcatAllEnumerator_inner]: none,
    [ConcatAllEnumerator_delegate]: none,
    [EnumeratorLike_isCompleted]: false,
}), {
    get [EnumeratorLike_current]() {
        unsafeCast(this);
        return this[ConcatAllEnumerator_inner][EnumeratorLike_current];
    },
    get [EnumeratorLike_hasCurrent]() {
        unsafeCast(this);
        return this[ConcatAllEnumerator_inner][EnumeratorLike_hasCurrent];
    },
    [EnumeratorLike_move]() {
        if (this[EnumeratorLike_isCompleted]) {
            return false;
        }
        const delegate = this[ConcatAllEnumerator_delegate];
        let inner = this[ConcatAllEnumerator_inner];
        while (!inner[EnumeratorLike_move]()) {
            if (delegate[EnumeratorLike_move]()) {
                inner = delegate[EnumeratorLike_current];
                this[ConcatAllEnumerator_inner] = inner;
            }
            else {
                inner = Enumerator_empty();
                this[ConcatAllEnumerator_inner] = inner;
                break;
            }
        }
        this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
        return this[EnumeratorLike_hasCurrent];
    },
}))))();
export default Enumerator_concatAll;
