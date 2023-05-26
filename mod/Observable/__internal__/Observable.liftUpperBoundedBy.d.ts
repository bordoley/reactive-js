import type { DeferredObservableBoundedObservableOperatorWithSideEffects, RunnableBoundedObservableOperatorWithSideEffects, RunnableBoundedPureObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { DeferredObservableLike, ObservableBaseLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, RunnableLike, RunnableWithSideEffectsLike } from "../../types.js";
interface ObservableLiftUpperBoundedBy {
    liftUpperBoundedBy(options: Pick<RunnableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => RunnableBoundedPureObservableOperator<TA, TB>;
    liftUpperBoundedBy(options: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => RunnableBoundedObservableOperatorWithSideEffects<TA, TB>;
    liftUpperBoundedBy(options: Pick<DeferredObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    liftUpperBoundedBy(options: Pick<ObservableBaseLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableBaseLike<TA>, ObservableBaseLike<TB>>;
}
declare const Observable_liftUpperBoundedBy: ObservableLiftUpperBoundedBy["liftUpperBoundedBy"];
export default Observable_liftUpperBoundedBy;
