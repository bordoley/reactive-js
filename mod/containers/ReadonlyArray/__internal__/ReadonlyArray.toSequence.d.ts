import { SequenceLike } from "../../../containers.js";
declare const ReadonlyArray_toSequence: <T>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => import("../../../functions.js").Function1<import("../../../containers.js").ReadonlyArrayLike<T>, SequenceLike<T>>;
export default ReadonlyArray_toSequence;
