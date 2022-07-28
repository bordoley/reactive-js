import { Factory, pipe, raise } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../util";
import { isDisposed } from "../../util/DisposableLike";
import { hasCurrent } from "../../util/EnumeratorLike";
import { prototype as disposablePrototype } from "../util/Disposable";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  anyProperty,
  createObjectFactory,
  init,
  mixWith,
} from "./Object";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

type TPrototype<T> = {
  [Object_properties]: unknown;
  [Object_init](this: unknown): void;
  [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
};

export const prototype: <T>() => TPrototype<T> = /*@__PURE__*/ (<T>() => {
  const Enumerator_private_current = Symbol("Enumerator_private_current");
  const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");

  type TProperties = {
    [Enumerator_private_current]: T;
    [Enumerator_private_hasCurrent]: boolean;
  };

  const description = {
    [Object_properties]: {
      [Enumerator_private_current]: anyProperty,
      [Enumerator_private_hasCurrent]: false,
    },
    [Object_init](this: TProperties) {
      this[Enumerator_private_hasCurrent] = false;
    },
    get [EnumeratorLike_current](): T {
      const self = this as unknown as TProperties & EnumeratorLike<T>;
      return hasCurrent(self) ? self[Enumerator_private_current] : raise();
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
  };
  return () => description;
})();

export const neverEnumerator: Factory<EnumeratorLike> = /*@__PURE__*/ (() =>
  pipe(
    {
      [Object_properties]: {},
      [Object_init](this: PropertyTypeOf<[typeof disposablePrototype]>) {
        init(disposablePrototype, this);
      },
      get [EnumeratorLike_current](): unknown {
        return raise();
      },
      get [EnumeratorLike_hasCurrent](): boolean {
        return false;
      },
      [SourceLike_move]() {},
    },
    mixWith(disposablePrototype),
    createObjectFactory<
      EnumeratorLike,
      PropertyTypeOf<[typeof disposablePrototype]>
    >(),
  ))();
