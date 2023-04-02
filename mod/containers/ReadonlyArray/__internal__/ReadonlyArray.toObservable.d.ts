import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ReadonlyArrayToObservable {
    <T>(): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: unknown): Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
    <T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
}
declare const ReadonlyArray_toObservable: ReadonlyArrayToObservable;
export default ReadonlyArray_toObservable;
