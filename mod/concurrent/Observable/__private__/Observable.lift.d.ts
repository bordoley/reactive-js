import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ComputationOperator, ComputationWithSideEffectsOperator, DeferringComputationOperator } from "../../../computations.js";
import { DeferredObservableWithSideEffectsLike, ObservableLike, ObserverLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
export declare const ObservableLift_isStateless: unique symbol;
interface ObservableLift {
    lift(options: {
        [ObservableLift_isStateless]: true;
        [ComputationLike_isDeferred]: boolean;
        [ComputationLike_isPure]: true;
        [ComputationLike_isSynchronous]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ComputationOperator<Observable.Computation, TA, TB>;
    lift(options: {
        [ComputationLike_isDeferred]: true;
        [ComputationLike_isPure]: true;
        [ComputationLike_isSynchronous]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => DeferringComputationOperator<Observable.Computation, TA, TB>;
    lift(options: {
        [ComputationLike_isDeferred]: true;
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ComputationWithSideEffectsOperator<Observable.Computation, TA, TB>;
    lift(options: {
        [ComputationLike_isDeferred]: true;
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    lift(options: {
        [ObservableLift_isStateless]: boolean;
        [ComputationLike_isDeferred]: boolean;
        [ComputationLike_isPure]: boolean;
        [ComputationLike_isSynchronous]: boolean;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const Observable_lift: ObservableLift["lift"];
export default Observable_lift;
