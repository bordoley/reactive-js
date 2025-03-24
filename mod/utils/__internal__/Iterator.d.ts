import { Function1 } from "../../functions.js";
import { AsyncEnumeratorLike, EnumeratorLike } from "../../utils.js";
interface Signature {
    toAsyncEnumerator<T>(): Function1<Iterator<T>, AsyncEnumeratorLike<T>>;
    toAsyncGenerator<T>(): Function1<Iterator<T>, AsyncGenerator<Awaited<T>, void, unknown>>;
    toEnumerator<T>(): Function1<Iterator<T>, EnumeratorLike<T>>;
    toGenerator<T>(): Function1<Iterator<T>, Generator<T, void, unknown>>;
}
export declare const toAsyncEnumerator: Signature["toAsyncEnumerator"];
export declare const toEnumerator: Signature["toEnumerator"];
export {};
