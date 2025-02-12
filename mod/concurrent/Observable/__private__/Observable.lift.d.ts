import { DeferredObservableWithSideEffectsLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import type { ObservableOperatorWithSideEffects, PureStatefulObservableOperator, PureStatelessObservableOperator } from "../../Observable.js";
export declare const ObservableLift_isStateless: unique symbol;
interface ObservableLift {
    lift(options: {
        [ObservableLift_isStateless]: true;
        [ObservableLike_isDeferred]: boolean;
        [ObservableLike_isPure]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => PureStatelessObservableOperator<TA, TB>;
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isPure]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => PureStatefulObservableOperator<TA, TB>;
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isPure]: false;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ObservableOperatorWithSideEffects<TA, TB>;
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isPure]: false;
        [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    lift(options: {
        [ObservableLift_isStateless]: boolean;
        [ObservableLike_isDeferred]: boolean;
        [ObservableLike_isPure]: boolean;
        [ObservableLike_isRunnable]: boolean;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const Observable_lift: ObservableLift["lift"];
export default Observable_lift;
