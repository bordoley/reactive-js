import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
export declare const sinkToObserver: <T>(delegate: LiftedSinkLike<ObserverLike, any>) => ObserverLike<T>;
declare const Observable_lift: <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
    [ComputationLike_isSynchronous]?: boolean;
}) => (operator: Function1<LiftedSinkLike<ObserverLike, TOut>, LiftedSinkLike<ObserverLike, TIn>>) => (source: ObservableLike<TIn>) => ObservableLike<TOut>;
export default Observable_lift;
