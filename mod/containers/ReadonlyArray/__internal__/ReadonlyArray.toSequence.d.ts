import { Function1 } from "../../../functions.js";
import { ReadonlyArrayLike, SequenceLike } from "../../../containers.js";
declare const ReadonlyArray_toSequence: <T>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => Function1<ReadonlyArrayLike<T>, SequenceLike<T>>;
export { ReadonlyArray_toSequence as default };
