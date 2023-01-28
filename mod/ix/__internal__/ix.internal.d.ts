import { EnumeratorLike, EnumeratorLike_current } from "../../ix.js";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare const DelegatingEnumeratorLike_delegate: unique symbol;
interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
    readonly [DelegatingEnumeratorLike_delegate]: EnumeratorLike;
}
export { DelegatingEnumeratorLike, DelegatingEnumeratorLike_delegate, MutableEnumeratorLike };
