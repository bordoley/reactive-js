import { none, raise } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
} from "../../util";
import { move as moveEnumerator } from "../../util/EnumeratorLike";
import { Object_init, Object_properties } from "../util/Object";

const DelegatingEnumerator_private_delegate = Symbol(
  "DelegatingEnumerator_private_delegate",
);

const properties = {
  [DelegatingEnumerator_private_delegate]: none as unknown as EnumeratorLike,
};

export const prototype = {
  [Object_properties]: properties,
  [Object_init](this: typeof properties, delegate: EnumeratorLike) {
    this[DelegatingEnumerator_private_delegate] = delegate;
  },
  get [EnumeratorLike_current](): unknown {
    const self = this as unknown as typeof properties;
    return (
      self[DelegatingEnumerator_private_delegate]?.[EnumeratorLike_current] ??
      raise()
    );
  },
  get [EnumeratorLike_hasCurrent](): boolean {
    const self = this as unknown as typeof properties;
    return (
      self[DelegatingEnumerator_private_delegate]?.[
        EnumeratorLike_hasCurrent
      ] ?? false
    );
  },
};

export const move = (enumerator: typeof properties): boolean => {
  const delegate = enumerator[DelegatingEnumerator_private_delegate];
  return (delegate && moveEnumerator(delegate)) || false;
};
