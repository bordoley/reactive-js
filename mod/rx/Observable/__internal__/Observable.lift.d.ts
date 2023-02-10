import { Function1 } from "../../../functions.js";
import { ObserverLike, ObservableLike } from "../../../rx.js";
declare const Observable_lift: (isEnumerable?: boolean, isRunnable?: boolean) => <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
export { Observable_lift as default };
