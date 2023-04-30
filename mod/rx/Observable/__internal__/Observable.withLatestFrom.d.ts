import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableWithLastestFrom = <C extends ObservableContainer, TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>) => ContainerOperator<C, TA, T>;
declare const Observable_withLatestFrom: ObservableWithLastestFrom;
export default Observable_withLatestFrom;
