import type { ObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
interface ObservableLift {
    lift<TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>): ObservableOperator<TA, TB>;
}
declare const Observable_liftSource: ObservableLift["lift"];
export default Observable_liftSource;
