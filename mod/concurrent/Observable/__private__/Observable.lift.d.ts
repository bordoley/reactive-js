import { DeferredObservableWithSideEffectsLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import type { ObservableOperatorWithSideEffects, PureDeferredObservableOperator, PureObservableOperator } from "../../Observable.js";
interface ObservableLift {
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isMulticasted]: true;
        [ObservableLike_isPure]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => PureObservableOperator<TA, TB>;
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isMulticasted]: false;
        [ObservableLike_isPure]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => PureDeferredObservableOperator<TA, TB>;
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isMulticasted]: false;
        [ObservableLike_isPure]: false;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ObservableOperatorWithSideEffects<TA, TB>;
    lift(options: {
        [ObservableLike_isDeferred]: true;
        [ObservableLike_isMulticasted]: false;
        [ObservableLike_isPure]: false;
        [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    lift(options: Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const Observable_lift: ObservableLift["lift"];
export default Observable_lift;
