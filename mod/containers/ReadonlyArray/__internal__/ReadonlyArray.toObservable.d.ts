import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ReadonlyArrayToObservable {
    <T>(): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: unknown): Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
    <T>(options: {
        count: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: {
        count: number;
        start: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: {
        start: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
    <T>(options: {
        delay: number;
        delayStart?: boolean;
        count?: number;
        start?: number;
    }): Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
}
declare const ReadonlyArray_toObservable: ReadonlyArrayToObservable;
export default ReadonlyArray_toObservable;
