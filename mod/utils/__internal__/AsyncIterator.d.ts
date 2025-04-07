import { Function1 } from "../../functions.js";
import { AsyncEnumeratorLike } from "../../utils.js";
interface Signature {
    fromAsyncEnumerator<T>(): Function1<AsyncEnumeratorLike<T>, AsyncIterator<T>>;
    toAsyncEnumerator<T>(): Function1<AsyncIterator<T>, AsyncEnumeratorLike<T>>;
}
export declare const fromAsyncEnumerator: Signature["fromAsyncEnumerator"];
export declare const toAsyncEnumerator: Signature["toAsyncEnumerator"];
export {};
