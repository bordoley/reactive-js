import { FromAsyncIterable, FromIterable, FromOptional, FromReadonlyArray } from "../containers.js";
import { FromEnumerable, FromRunnable, ToObservable, ToRunnable } from "../rx.js";
import { FlowableLike } from "../streaming.js";
/**
 * @category Constructor
 */
export declare const create: <T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableLike<unknown>, import("../streaming.js").FlowableState, T>) => FlowableLike<T>;
export declare const fromAsyncIterable: FromAsyncIterable<FlowableLike, {
    maxYieldInterval?: number;
}>["fromAsyncIterable"];
export declare const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<FlowableLike>["fromIterable"];
export declare const fromOptional: FromOptional<FlowableLike, {
    delay?: number;
}>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<FlowableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<FlowableLike>["fromRunnable"];
export declare const toObservable: ToObservable<FlowableLike>["toObservable"];
export declare const toRunnable: ToRunnable<FlowableLike>["toRunnable"];
