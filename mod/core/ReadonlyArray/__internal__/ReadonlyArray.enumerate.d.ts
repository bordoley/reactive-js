import { EnumeratorLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const ReadonlyArray_enumerate: <T>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
export default ReadonlyArray_enumerate;
