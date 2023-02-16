import { Function1 } from "../../../functions.js";
import { ReadonlyArrayLike } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
declare const ReadonlyArray_toRunnableObservable: <T>(options?: ({
    delay?: number | undefined;
    delayStart?: boolean | undefined;
} & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<ReadonlyArrayLike<T>, RunnableObservableLike<T>>;
export { ReadonlyArray_toRunnableObservable as default };
