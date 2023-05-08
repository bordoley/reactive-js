import { EnumerableLike, RunnableLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
interface ReadonlyArrayToObservable {
    toObservable<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, RunnableLike<T>>;
    toObservable<T>(options: unknown): Function1<ReadonlyArray<T>, RunnableLike<T>>;
}
declare const ReadonlyArray_toObservable: ReadonlyArrayToObservable["toObservable"];
export default ReadonlyArray_toObservable;
