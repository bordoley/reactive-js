import { Function1 } from "../../functions.js";
import { AsyncEnumeratorLike, SyncEnumeratorLike } from "../../utils.js";
interface Signature {
    toAsyncEnumerator<T>(): Function1<Iterator<T>, AsyncEnumeratorLike<T>>;
    toSyncEnumerator<T>(): Function1<Iterator<T>, SyncEnumeratorLike<T>>;
}
export declare const toAsyncEnumerator: Signature["toAsyncEnumerator"];
export declare const toSyncEnumerator: Signature["toSyncEnumerator"];
export {};
