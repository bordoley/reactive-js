import { Function1 } from "./functions.mjs";
import { ObservableLike } from "./observable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamableLike } from "./streamable.mjs";
declare type FlowMode = "resume" | "pause";
/** @noInheritDoc */
interface FlowableLike<T> extends StreamableLike<FlowMode, T> {
}
declare type FlowableOperator<TA, TB> = Function1<FlowableLike<TA>, FlowableLike<TB>>;
declare const fromObservable: <T>({ scheduler, }?: {
    scheduler?: SchedulerLike | undefined;
}) => Function1<ObservableLike<T>, FlowableLike<T>>;
declare const fromArray: <T>(options?: {
    readonly delay?: number;
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], FlowableLike<T>>;
declare const fromValue: <T>(options?: {
    readonly delay?: number;
}) => Function1<T, FlowableLike<T>>;
declare const empty: <T>() => FlowableLike<T>;
export { FlowMode, FlowableLike, FlowableOperator, empty, fromArray, fromObservable, fromValue };
