import { Factory, none, pipe, raise } from "../../functions";
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
  createObjectFactory,
  init,
  mixWith,
} from "./Object";

const Enumerator_private_current = Symbol("Enumerator_private_current");
const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

const properties = {
  [Enumerator_private_current]: none as unknown,
  [Enumerator_private_hasCurrent]: false,
};

export const prototype = {
  [Object_properties]: properties,
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

export const neverEnumerator: Factory<EnumeratorLike> = /*@__PURE__*/ (() =>
  pipe(
    {
      [Object_properties]: disposablePrototype[Object_properties],
      [Object_init](
        this: typeof disposablePrototype[typeof Object_properties],
      ) {
        init(disposablePrototype, this);
      },
      get [EnumeratorLike_current](): unknown {
        return raise();
      },
      get [EnumeratorLike_hasCurrent](): boolean {
        return false;
      },
      [SourceLike_move](this: typeof properties) {},
    },
    mixWith(disposablePrototype),
    createObjectFactory<
      EnumeratorLike,
      typeof disposablePrototype[typeof Object_properties]
    >(),
  ))();
