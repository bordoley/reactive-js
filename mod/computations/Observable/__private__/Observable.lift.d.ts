import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike } from "../../../computations.js";
import { Function1, Optional } from "../../../functions.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
export declare const liftedSinkToObserver: <T>(delegate: LiftedSinkLike<ObserverLike, unknown>, backPressure?: Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>) => ObserverLike<T>;
export declare const liftedSinkToObserverWithBackPressure: <T>(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
}) => (sink: LiftedSinkLike<ObserverLike, T>) => ObserverLike<unknown>;
declare const Observable_lift: <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
    [ComputationLike_isSynchronous]?: boolean;
}) => (operator: Function1<LiftedSinkLike<ObserverLike, TOut>, LiftedSinkLike<ObserverLike, TIn>>) => (source: ObservableLike<TIn>) => ObservableLike<TOut>;
export default Observable_lift;
