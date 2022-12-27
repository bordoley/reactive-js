import { EnumeratorLike, EnumeratorLike_current } from "../../ix";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

export const DelegatingEnumerator_move_delegate = Symbol(
  "DelegatingEnumerator_move_delegate",
);

export interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
  [DelegatingEnumerator_move_delegate](): boolean;
}
