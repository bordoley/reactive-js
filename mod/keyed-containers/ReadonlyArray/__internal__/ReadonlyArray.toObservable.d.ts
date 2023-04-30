import { ReadonlyArrayContainerLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ReadonlyArrayToObservable {
    toObservable<T>(): Function1<ReadonlyArrayContainerLike<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArrayContainerLike<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArrayContainerLike<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArrayContainerLike<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArrayContainerLike<T>, RunnableLike<T>>;
    toObservable<T>(options: unknown): Function1<ReadonlyArrayContainerLike<T>, RunnableLike<T>>;
}
declare const ReadonlyArray_toObservable: ReadonlyArrayToObservable["toObservable"];
export default ReadonlyArray_toObservable;
