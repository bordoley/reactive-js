import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  Optional,
  Predicate,
  alwaysFalse,
  alwaysTrue,
  error,
  isNone,
  isNumber,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
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
    [RepeatEnumerator_inner]: EnumeratorLike<T>;
    [EnumeratorLike_isCompleted]: boolean;
  };

  const createRepeatEnumerator = createInstanceFactory(
    mix(
      include(DisposableMixin),
      function RepeatEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> & TProperties,
        enumerable: EnumerableLike<T>,
        shouldRepeat: Predicate<number>,
      ): EnumeratorLike<T> {
        init(DisposableMixin, instance);
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
          return this[RepeatEnumerator_inner][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return this[RepeatEnumerator_inner][EnumeratorLike_hasCurrent];
        },

        [EnumeratorLike_move](this: TProperties & EnumeratorLike<T>): boolean {
          let inner = this[RepeatEnumerator_inner];

          this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];

          while (
            !this[DisposableLike_isDisposed] &&
            !inner[EnumeratorLike_move]()
          ) {
            const cnt = this[RepeatEnumerator_count];

            let shouldComplete = false;
            let err = inner[DisposableLike_error];
            try {
              shouldComplete =
                cnt !== 0 && !this[RepeatEnumerator_predicate](cnt);
            } catch (e) {
              shouldComplete = true;
              err = isSome(err) ? error([error(e), err]) : error(e);
            }

            if (shouldComplete || isSome(err)) {
              this[DisposableLike_dispose](err);
            } else {
              this[RepeatEnumerator_count]++;
              inner =
                this[RepeatEnumerator_enumerable][EnumerableLike_enumerate]();
              pipe(this, Disposable.add(inner, { ignoreChildErrors: true }));
              this[RepeatEnumerator_inner] = inner;
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
