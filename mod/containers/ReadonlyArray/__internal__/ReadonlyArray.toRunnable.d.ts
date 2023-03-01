import { RunnableLike } from "../../../rx.js";
declare const ReadonlyArray_toRunnable: <T>(options?: ({
    delay?: number | undefined;
    delayStart?: boolean | undefined;
} & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => import("../../../functions.js").Function1<import("../../../containers.js").ReadonlyArrayLike<T>, RunnableLike<T>>;
export default ReadonlyArray_toRunnable;
