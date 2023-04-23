import { RunnableLike } from "../../../rx.js";
declare const Runnable_contains: <T>(value: T, options?: {
    readonly equality?: import("../../../functions.js").Equality<T> | undefined;
}) => import("../../../functions.js").Function1<RunnableLike<T>, boolean>;
export default Runnable_contains;
