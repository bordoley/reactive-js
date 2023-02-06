import { EnumeratorLike, EnumeratorLike_current } from "../../ix";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}
