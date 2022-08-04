import { none, pipe, raise, returns } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../util";
import { DisposableLike, isDisposed } from "./DisposableLikeInternal";
import { Class, UnknownObject, clazz } from "./Object";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

export const enumeratorMixin: <T>() => Class<
  TEnumeratorMixinReturn<T>,
  UnknownObject,
  {
    [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
  }
> = /*@__PURE__*/ (<T>() => {
  const Enumerator_private_current = Symbol("Enumerator_private_current");
  const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");

  type TProperties = {
    [Enumerator_private_current]: T;
    [Enumerator_private_hasCurrent]: boolean;
  };

  return pipe(
    clazz(
      function EnumeratorMixin(
        this: TProperties & TEnumeratorMixinReturn<T>,
      ): TEnumeratorMixinReturn<T> {
        this[Enumerator_private_hasCurrent] = false;
        return this;
      },
      {
        [Enumerator_private_current]: none,
        [Enumerator_private_hasCurrent]: false,
      },
      {
        get [EnumeratorLike_current](): T {
          const self = this as unknown as TProperties & EnumeratorLike<T>;
          return self[EnumeratorLike_hasCurrent]
            ? self[Enumerator_private_current]
            : raise();
        },
        set [EnumeratorLike_current](v: T) {
          const self = this as unknown as TProperties & EnumeratorLike;
          if (!isDisposed(self)) {
            self[Enumerator_private_current] = v;
            self[Enumerator_private_hasCurrent] = true;
          }
        },
        get [EnumeratorLike_hasCurrent](): boolean {
          const self = this as unknown as TProperties & EnumeratorLike;
          return !isDisposed(self) && self[Enumerator_private_hasCurrent];
        },
      },
    ),
    returns,
  );
})();
