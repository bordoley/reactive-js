import { raise } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
} from "../../ix";
import { hasCurrent } from "../../ix/EnumeratorLike";
import { isDisposed } from "../../util/DisposableLike";
import { none } from "../../util/Option";
import { Object_init } from "../util/Object";

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
