import { Function1 } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import { ReadonlyArrayLike } from "../../../containers.js";
declare const Enumerable_fromArray: <T>(options?: {
    readonly start: number;
    readonly count: number;
} | undefined) => Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
export { Enumerable_fromArray as default };
