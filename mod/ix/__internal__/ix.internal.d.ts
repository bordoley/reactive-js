import { EnumeratorLike, EnumeratorLike_current } from "../../ix.js";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare const DelegatingEnumerator_move_delegate: unique symbol;
interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
    [DelegatingEnumerator_move_delegate](): boolean;
}
export { DelegatingEnumeratorLike, DelegatingEnumerator_move_delegate, MutableEnumeratorLike };
