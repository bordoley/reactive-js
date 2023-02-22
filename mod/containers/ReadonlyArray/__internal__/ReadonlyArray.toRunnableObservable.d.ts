import { RunnableObservableLike } from "../../../rx.js";
declare const ReadonlyArray_toRunnableObservable: <T>(options?: ({
    delay?: number | undefined;
    delayStart?: boolean | undefined;
} & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => import("../../../functions.js").Function1<import("../../../containers.js").ReadonlyArrayLike<T>, RunnableObservableLike<T>>;
export default ReadonlyArray_toRunnableObservable;
