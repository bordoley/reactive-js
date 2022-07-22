import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  move as moveEnumerator,
} from "../../ix/EnumeratorLike";
import { none } from "../../util/Option";

const Enumerator_private_delegate = Symbol("Enumerator_private_delegate");

export const properties = {
  [Enumerator_private_delegate]: none as unknown as EnumeratorLike,
};

export const prototype = {
  get [EnumeratorLike_current](): unknown {
    const self = this as unknown as typeof properties;
    return self[Enumerator_private_delegate][EnumeratorLike_current];
  },
  get [EnumeratorLike_hasCurrent](): boolean {
    const self = this as unknown as typeof properties;
    return self[Enumerator_private_delegate][EnumeratorLike_hasCurrent];
  },
};

export const init = <T>(
  self: typeof properties & typeof prototype,
  delegate: EnumeratorLike<T>,
) => {
  self[Enumerator_private_delegate] = delegate;
};

export const move = (enumerator: typeof properties) =>
  moveEnumerator(enumerator[Enumerator_private_delegate]);
