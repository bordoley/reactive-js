import { DeferredObservableWithSideEffectsLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, PureRunnableLike, RunnableWithSideEffectsLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import type { DeferredObservableWithSideEffectsOperator, ObservableOperatorWithSideEffects, PureObservableOperator } from "../../Observable.js";
interface ObservableLift {
    lift(options: Pick<PureRunnableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => PureObservableOperator<TA, TB>;
    lift(options: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ObservableOperatorWithSideEffects<TA, TB>;
    lift(options: Pick<DeferredObservableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => DeferredObservableWithSideEffectsOperator<TA, TB>;
    lift(options: Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const Observable_lift: ObservableLift["lift"];
export default Observable_lift;
