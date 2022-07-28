import { none, pipe, raise, returns } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
} from "../../util";
import { isDisposed } from "./DisposableLikeInternal";
import { Object_init, Object_properties } from "./Object";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

export const enumeratorMixin: <T>() => {
  [Object_properties]: unknown;
  [Object_init](this: unknown): void;
  [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
} = /*@__PURE__*/ (<T>() => {
  const Enumerator_private_current = Symbol("Enumerator_private_current");
  const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");

  type TProperties = {
    [Enumerator_private_current]: T;
    [Enumerator_private_hasCurrent]: boolean;
  };

  return pipe(
    {
      [Object_properties]: {
        [Enumerator_private_current]: none,
        [Enumerator_private_hasCurrent]: false,
      },
      [Object_init](this: TProperties) {
        this[Enumerator_private_hasCurrent] = false;
      },
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
    returns,
  );
})();
