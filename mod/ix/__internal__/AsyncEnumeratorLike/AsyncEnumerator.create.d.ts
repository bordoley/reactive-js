import { ContainerOperator } from "../../../containers.mjs";
import { AsyncEnumeratorLike } from "../../../ix.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const AsyncEnumerator__create: <T>(op: ContainerOperator<ObservableLike<unknown>, void, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => AsyncEnumeratorLike<T>;
export { AsyncEnumerator__create as default };
