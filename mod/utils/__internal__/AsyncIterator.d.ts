import { Function1 } from "../../functions.js";
import { AsyncEnumeratorLike } from "../../utils.js";
interface Signature {
    toAsyncEnumerator<T>(): Function1<AsyncIterator<T>, AsyncEnumeratorLike<T>>;
}
export declare const toAsyncEnumerator: Signature["toAsyncEnumerator"];
export {};
