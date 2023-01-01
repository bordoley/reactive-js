import { Function1 } from "../../../functions.mjs";
import { ObserverLike, ObservableLike } from "../../../rx.mjs";
declare const lift: (isEnumerable?: boolean, isRunnable?: boolean) => <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
export { lift as default };
