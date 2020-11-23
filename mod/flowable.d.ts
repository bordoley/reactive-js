/// <reference types="node" />
import { Function1 } from './functions';
import './option';
import './disposable';
import './dispatcher';
import { SchedulerLike } from './scheduler';
import { ObservableLike } from './observable';
import './enumerable';
import './runnable';
import { StreamableLike } from './streamable';

declare const enum FlowMode {
    Resume = 1,
    Pause = 2
}
/** @noInheritDoc */
interface FlowableLike<T> extends StreamableLike<FlowMode, T> {
}
declare type FlowableOperator<TA, TB> = Function1<FlowableLike<TA>, FlowableLike<TB>>;
declare const fromObservable: <T>({ scheduler, }?: {
    scheduler?: SchedulerLike | undefined;
}) => Function1<ObservableLike<T>, FlowableLike<T>>;
declare const fromArray: <T>(options?: {
    readonly delay?: number | undefined;
    readonly startIndex?: number | undefined;
    readonly endIndex?: number | undefined;
} | undefined) => Function1<readonly T[], FlowableLike<T>>;
declare const fromValue: <T>(options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<T, FlowableLike<T>>;
declare const empty: <T>() => FlowableLike<T>;

export { FlowMode, FlowableLike, FlowableOperator, empty, fromArray, fromObservable, fromValue };
