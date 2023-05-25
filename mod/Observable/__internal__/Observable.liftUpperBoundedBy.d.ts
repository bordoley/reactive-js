import type { DeferredObservableBoundedObservableOperatorWithSideEffects, RunnableBoundedObservableOperatorWithSideEffects, RunnableBoundedPureObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ObservableBaseLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
interface ObservableLiftUpperBoundedBy {
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => RunnableBoundedPureObservableOperator<TA, TB>;
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => RunnableBoundedObservableOperatorWithSideEffects<TA, TB>;
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isPure]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableBaseLike<TA>, ObservableBaseLike<TB>>;
}
declare const Observable_liftUpperBoundedBy: ObservableLiftUpperBoundedBy["liftUpperBoundedBy"];
export default Observable_liftUpperBoundedBy;
