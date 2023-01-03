import { AsyncEnumeratorLike, AsyncEnumerableLike } from "../../../ix.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const AsyncEnumerable__create: <T>(f: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => AsyncEnumeratorLike<T>) => AsyncEnumerableLike<T>;
export { AsyncEnumerable__create as default };
