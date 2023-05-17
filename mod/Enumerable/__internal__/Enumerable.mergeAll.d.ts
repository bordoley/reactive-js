import type * as Enumerable from "../../Enumerable.js";
declare const Enumerable_mergeAll: <T>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly concurrency?: number | undefined;
} | undefined) => import("../../types.js").ContainerOperator<Enumerable.EnumerableContainer, import("../../types.js").EnumerableLike<T>, T>;
export default Enumerable_mergeAll;
