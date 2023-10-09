import {
  createInstanceFactory,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import {
  Optional,
  Predicate,
  alwaysFalse,
  alwaysTrue,
  isNone,
  isNumber,
  none,
} from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_repeat: Enumerable.Signature["repeat"] = /*@__PURE__*/ (<
  T,
>() => {
  const RepeatEnumerator_count = Symbol("RepeatEnumerator_count");
  const RepeatEnumerator_enumerable = Symbol("RepeatEnumerator_enumerable");
  const RepeatEnumerator_inner = Symbol("RepeatEnumerator_inner");
  const RepeatEnumerator_predicate = Symbol("RepeatEnumerator_predicate");

  type TProperties = {
    [RepeatEnumerator_predicate]: (count: number) => boolean;
    [RepeatEnumerator_count]: number;
    [RepeatEnumerator_enumerable]: EnumerableLike<T>;
    [RepeatEnumerator_inner]: Optional<EnumeratorLike<T>>;
    [EnumeratorLike_isCompleted]: boolean;
  };

  const createRepeatEnumerator = createInstanceFactory(
    mix(
      function RepeatEnumerator(
        instance: EnumeratorLike<T> & TProperties,
        enumerable: EnumerableLike<T>,
        shouldRepeat: Predicate<number>,
      ): EnumeratorLike<T> {
        instance[RepeatEnumerator_enumerable] = enumerable;

        instance[RepeatEnumerator_inner] = Enumerator_empty();
        instance[RepeatEnumerator_predicate] = shouldRepeat;

        return instance;
      },
      props<TProperties>({
        [RepeatEnumerator_inner]: none,
        [RepeatEnumerator_predicate]: alwaysFalse,
        [RepeatEnumerator_count]: 0,
        [RepeatEnumerator_enumerable]: none,
        [EnumeratorLike_isCompleted]: false,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<TProperties>(this);
          return this[RepeatEnumerator_inner]?.[EnumeratorLike_current] as T;
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return (
            this[RepeatEnumerator_inner]?.[EnumeratorLike_hasCurrent] ?? false
          );
        },

        [EnumeratorLike_move](this: TProperties & EnumeratorLike<T>): boolean {
          let inner = this[RepeatEnumerator_inner];

          while (!inner?.[EnumeratorLike_move]() ?? true) {
            const cnt = this[RepeatEnumerator_count];

            this[EnumeratorLike_isCompleted] =
              cnt !== 0 && !this[RepeatEnumerator_predicate](cnt);

            if (!this[EnumeratorLike_isCompleted]) {
              this[RepeatEnumerator_count]++;
              this[RepeatEnumerator_inner] =
                this[RepeatEnumerator_enumerable][EnumerableLike_enumerate]();
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (countOrPredicate: Optional<number | Predicate<number>>) =>
    (enumerable: EnumerableLike<T>) => {
      const predicate: Predicate<number> = isNone(countOrPredicate)
        ? alwaysTrue
        : isNumber(countOrPredicate)
        ? (count: number) => count < countOrPredicate
        : countOrPredicate;

      return Enumerable_create(() =>
        createRepeatEnumerator(enumerable, predicate),
      );
    };
})() as Enumerable.Signature["repeat"];

export default Enumerable_repeat;
