import { Container, ObservableContainer } from "../../../core.js";
import { Function2 } from "../../../functions.js";
type ObservableWithLastestFrom = <C extends ObservableContainer, TA, TB, T>(other: Container.Of<C, TB>, selector: Function2<TA, TB, T>) => Container.Operator<C, TA, T>;
declare const Observable_withLatestFrom: ObservableWithLastestFrom;
export default Observable_withLatestFrom;
