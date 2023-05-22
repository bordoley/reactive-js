import type { DeferredObservableUpperBoundObservableOperator, MulticastObservableUpperBoundObservableOperator, RunnableUpperBoundObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
interface ObservableLiftUpperBoundedBy {
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => RunnableUpperBoundObservableOperator<TA, TB>;
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => DeferredObservableUpperBoundObservableOperator<TA, TB>;
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: false;
        readonly [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => MulticastObservableUpperBoundObservableOperator<TA, TB>;
    liftUpperBoundedBy(options: {
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const Observable_liftUpperBoundedBy: ObservableLiftUpperBoundedBy["liftUpperBoundedBy"];
export default Observable_liftUpperBoundedBy;
