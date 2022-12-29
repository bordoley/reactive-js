import { ContainerOperator } from "../../../containers.mjs";
import { Function2 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
export { zipWithLatestFrom as default };
