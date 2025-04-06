import { Function1 } from "../../functions.js";
import { ConsumableEnumeratorLike } from "../../utils.js";
interface Signature {
    toAsyncIterator<T>(): Function1<ConsumableEnumeratorLike<T>, AsyncIterator<T>>;
}
export declare const toAsyncIterator: Signature["toAsyncIterator"];
export {};
