import { Factory, none, raise } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../util";
import { isDisposed } from "../../util/DisposableLike";
import { hasCurrent } from "../../util/EnumeratorLike";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../util/Disposable";
import { Object_init, createObjectFactory, init, mix } from "./Object";

const Enumerator_private_current = Symbol("Enumerator_private_current");
const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

export const properties = {
  [Enumerator_private_current]: none as unknown,
  [Enumerator_private_hasCurrent]: false,
};

export const prototype = {
  [Object_init](this: typeof properties) {
    this[Enumerator_private_current] = none;
    this[Enumerator_private_hasCurrent] = false;
  },
  get [EnumeratorLike_current](): unknown {
    const self = this as unknown as typeof properties & EnumeratorLike;
    return hasCurrent(self) ? self[Enumerator_private_current] : raise();
  },
  set [EnumeratorLike_current](v: unknown) {
    const self = this as unknown as typeof properties & EnumeratorLike;
    if (!isDisposed(self)) {
      self[Enumerator_private_current] = v;
      self[Enumerator_private_hasCurrent] = true;
    }
  },
  get [EnumeratorLike_hasCurrent](): boolean {
    const self = this as unknown as typeof properties & EnumeratorLike;
    return !isDisposed(self) && self[Enumerator_private_hasCurrent];
  },
};

export const neverEnumerator: Factory<EnumeratorLike> = /*@__PURE__*/ (() => {
  const properties = {
    ...disposableProperties,
  };
  const prototype = mix(disposablePrototype, {
    get [EnumeratorLike_current](): unknown {
      return raise();
    },
    get [EnumeratorLike_hasCurrent](): boolean {
      return false;
    },
    [Object_init](this: typeof properties) {
      init(disposablePrototype, this);
    },
    [SourceLike_move](this: typeof properties) {},
  });

  return createObjectFactory(prototype, properties);
})();
