/// <reference types="./Enumerable.concatAll.d.ts" />

import { mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { invoke, none, pipe, returns } from "../../../functions.js";
import Enumerable_create from "./Enumerable.create.js";
import Enumerable_empty from "./Enumerable.empty.js";
import Enumerable_map from "./Enumerable.map.js";
const ConcatAllEnumerator_inner = Symbol("ConcatAllEnumerator_inner");
const ConcatAllEnumerator_delegate = Symbol("ConcatAllEnumerator_delegate");
const Enumerator_concatAll = /*@__PURE__*/ (() => returns(mixInstanceFactory(function ConcatAllEnumerator(instance, delegate) {
    instance[ConcatAllEnumerator_delegate] = delegate;
    instance[ConcatAllEnumerator_inner] =
        Enumerable_empty()[EnumerableLike_enumerate]();
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
                inner = Enumerable_empty()[EnumerableLike_enumerate]();
                this[ConcatAllEnumerator_inner] = inner;
                break;
            }
        }
        this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
        return this[EnumeratorLike_hasCurrent];
    },
})))();
const Enumerable_concatAll = () => (enumerable) => Enumerable_create(() => pipe(enumerable, Enumerable_map(invoke(EnumerableLike_enumerate)), invoke(EnumerableLike_enumerate), Enumerator_concatAll()));
export default Enumerable_concatAll;
