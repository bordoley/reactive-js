import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  move as moveEnumerator,
} from "../../ix/EnumeratorLike";
import { Option, none } from "../../util/Option";
import { raise } from "../../util/functions";

const Enumerator_private_delegate = Symbol("Enumerator_private_delegate");

export const properties: {
  [Enumerator_private_delegate]: Option<EnumeratorLike>;
} = {
  [Enumerator_private_delegate]: none,
};

export const prototype = {
  get [EnumeratorLike_current](): unknown {
    const self = this as unknown as typeof properties;
    return (
      self[Enumerator_private_delegate]?.[EnumeratorLike_current] ?? raise()
    );
  },
  get [EnumeratorLike_hasCurrent](): boolean {
    const self = this as unknown as typeof properties;
    return (
      self[Enumerator_private_delegate]?.[EnumeratorLike_hasCurrent] ?? false
    );
  },
};

export const init = <T>(
  self: typeof properties & typeof prototype,
  delegate: EnumeratorLike<T>,
) => {
  self[Enumerator_private_delegate] = delegate;
};

export const move = (enumerator: typeof properties): boolean => {
  const delegate = enumerator[Enumerator_private_delegate];
  return (delegate && moveEnumerator(delegate)) || false;
};
