import { ContainerOperator } from "../../../containers.js";
import { AsyncEnumeratorLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const AsyncEnumerator$create: <T>(op: ContainerOperator<ObservableLike<unknown>, void, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => AsyncEnumeratorLike<T>;
export { AsyncEnumerator$create as default };
