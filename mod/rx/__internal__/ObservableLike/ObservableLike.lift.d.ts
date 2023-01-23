import { Function1 } from "../../../functions.js";
import { ObserverLike, ObservableLike } from "../../../rx.js";
declare const ObservableLike__lift: (isEnumerable?: boolean, isRunnable?: boolean) => <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
export { ObservableLike__lift as default };
