import { none, raise } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
} from "../../util";
import { move as moveEnumerator } from "../../util/EnumeratorLike";
import { Object_init, Object_properties } from "../util/Object";

const DelegatingEnumerator_move_delegate = Symbol(
  "DelegatingEnumerator_move_delegate",
);

type TPrototype<T> = {
  [Object_properties]: unknown;
  [Object_init](this: unknown, delegate: EnumeratorLike<T>): void;
  [DelegatingEnumerator_move_delegate](): boolean;
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
};

export interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
  [DelegatingEnumerator_move_delegate](): boolean;
}

export const prototype: <T>() => TPrototype<T> = /*@__PURE__*/ (<T>() => {
  const DelegatingEnumerator_private_delegate = Symbol(
    "DelegatingEnumerator_private_delegate",
  );

  type TProperties = {
    [DelegatingEnumerator_private_delegate]: EnumeratorLike<T>;
  };

  const prototype = {
    [Object_properties]: {
      [DelegatingEnumerator_private_delegate]: none,
    },
    [Object_init](this: TProperties, delegate: EnumeratorLike<T>) {
      this[DelegatingEnumerator_private_delegate] = delegate;
    },
    get [EnumeratorLike_current](): T {
      const self = this as unknown as TProperties;
      return (
        self[DelegatingEnumerator_private_delegate]?.[EnumeratorLike_current] ??
        raise()
      );
    },
    get [EnumeratorLike_hasCurrent](): boolean {
      const self = this as unknown as TProperties;
      return self[DelegatingEnumerator_private_delegate][
        EnumeratorLike_hasCurrent
      ];
    },
    [DelegatingEnumerator_move_delegate](this: TProperties): boolean {
      const delegate = this[DelegatingEnumerator_private_delegate];
      return moveEnumerator(delegate);
    },
  };

  return () => prototype;
})();

export const move = (enumerator: {
  [DelegatingEnumerator_move_delegate](): boolean;
}): boolean => enumerator[DelegatingEnumerator_move_delegate]();
