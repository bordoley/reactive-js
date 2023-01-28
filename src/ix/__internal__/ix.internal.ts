import { EnumeratorLike, EnumeratorLike_current } from "../../ix";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

export const DelegatingEnumeratorLike_delegate = Symbol(
  "DelegatingEnumeratorLike_delegate",
);

export interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
  readonly [DelegatingEnumeratorLike_delegate]: EnumeratorLike;
}
