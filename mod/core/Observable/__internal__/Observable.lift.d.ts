import { DeferredObservableLike, EnumerableLike, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike, RunnableLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
interface ObservableLift {
    lift<C extends EnumerableLike>(config: {
        [ObservableLike_isEnumerable]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
    lift<C extends RunnableLike>(config: {
        [ObservableLike_isEnumerable]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
    lift<C extends RunnableLike>(config: {
        [ObservableLike_isEnumerable]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<DeferredObservableLike<TA>, DeferredObservableLike<TB>>;
    lift<C extends ObservableLike>(config: {
        [ObservableLike_isEnumerable]: true;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
    lift<C extends RunnableLike>(config: {
        [ObservableLike_isEnumerable]: false;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
    lift<C extends RunnableLike>(config: {
        [ObservableLike_isEnumerable]: false;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<DeferredObservableLike<TA>, DeferredObservableLike<TB>>;
    lift<C extends ObservableLike>(config: {
        [ObservableLike_isEnumerable]: false;
        [ObservableLike_isRunnable]: true;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
    lift(config: {
        [ObservableLike_isEnumerable]: false;
        [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<DeferredObservableLike<TA>, DeferredObservableLike<TB>>;
    lift(config: {
        [ObservableLike_isEnumerable]: false;
        [ObservableLike_isRunnable]: false;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
    lift(config: {
        [ObservableLike_isEnumerable]: boolean;
        [ObservableLike_isRunnable]: boolean;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<DeferredObservableLike<TA>, DeferredObservableLike<TB>>;
    lift(config: {
        [ObservableLike_isEnumerable]: boolean;
        [ObservableLike_isRunnable]: boolean;
    }): <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const Observable_lift: ObservableLift["lift"];
export default Observable_lift;
