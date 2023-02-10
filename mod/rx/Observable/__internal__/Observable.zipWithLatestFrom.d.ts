import { ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
export { Observable_zipWithLatestFrom as default };
