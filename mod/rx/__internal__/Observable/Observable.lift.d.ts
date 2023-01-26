import { Function1 } from "../../../functions.js";
import { ObserverLike, ObservableLike } from "../../../rx.js";
declare const Observable$lift: (isEnumerable?: boolean, isRunnable?: boolean) => <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
export { Observable$lift as default };
