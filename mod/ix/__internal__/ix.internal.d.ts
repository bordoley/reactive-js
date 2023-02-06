import { EnumeratorLike, EnumeratorLike_current } from "../../ix.js";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
export { MutableEnumeratorLike };
