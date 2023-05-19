import type { ObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
interface ObservableLiftEnumerableUpperBounded {
    liftEnumerableUpperBounded<TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>): ObservableOperator<TA, TB>;
}
declare const Observable_liftEnumerableUpperBounded: ObservableLiftEnumerableUpperBounded["liftEnumerableUpperBounded"];
export default Observable_liftEnumerableUpperBounded;
