import { Function1 } from "../../functions.js";
import { AsyncEnumeratorLike, EnumeratorLike } from "../../utils.js";
interface Signature {
    toAsyncEnumerator<T>(): Function1<Iterator<T>, AsyncEnumeratorLike<T>>;
    toEnumerator<T>(): Function1<Iterator<T>, EnumeratorLike<T>>;
}
export declare const toAsyncEnumerator: Signature["toAsyncEnumerator"];
export declare const toEnumerator: Signature["toEnumerator"];
export {};
