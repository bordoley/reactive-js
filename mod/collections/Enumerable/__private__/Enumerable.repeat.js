/// <reference types="./Enumerable.repeat.d.ts" />

import { mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { alwaysFalse, alwaysTrue, isNone, isNumber, none, } from "../../../functions.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_repeat = /*@__PURE__*/ (() => {
    const RepeatEnumerator_count = Symbol("RepeatEnumerator_count");
    const RepeatEnumerator_enumerable = Symbol("RepeatEnumerator_enumerable");
    const RepeatEnumerator_inner = Symbol("RepeatEnumerator_inner");
    const RepeatEnumerator_predicate = Symbol("RepeatEnumerator_predicate");
    const createRepeatEnumerator = mixInstanceFactory(function RepeatEnumerator(instance, enumerable, shouldRepeat) {
        instance[RepeatEnumerator_enumerable] = enumerable;
        instance[RepeatEnumerator_inner] = none;
        instance[RepeatEnumerator_predicate] = shouldRepeat;
        return instance;
    }, props({
        [RepeatEnumerator_inner]: none,
        [RepeatEnumerator_predicate]: alwaysFalse,
        [RepeatEnumerator_count]: 0,
        [RepeatEnumerator_enumerable]: none,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[RepeatEnumerator_inner]?.[EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return (this[RepeatEnumerator_inner]?.[EnumeratorLike_hasCurrent] ?? false);
        },
        [EnumeratorLike_move]() {
            let inner = this[RepeatEnumerator_inner];
            while (!(inner?.[EnumeratorLike_move]() ?? false)) {
                const cnt = this[RepeatEnumerator_count];
                this[EnumeratorLike_isCompleted] =
                    cnt !== 0 && !this[RepeatEnumerator_predicate](cnt);
                if (!this[EnumeratorLike_isCompleted]) {
                    this[RepeatEnumerator_count]++;
                    inner = this[RepeatEnumerator_inner] =
                        this[RepeatEnumerator_enumerable][EnumerableLike_enumerate]();
                }
                else {
                    this[RepeatEnumerator_inner] = none;
                    break;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
    });
    return (countOrPredicate) => (enumerable) => {
        const predicate = isNone(countOrPredicate)
            ? alwaysTrue
            : isNumber(countOrPredicate)
                ? (count) => count < countOrPredicate
                : countOrPredicate;
        return Enumerable_create(() => createRepeatEnumerator(enumerable, predicate));
    };
})();
export default Enumerable_repeat;
