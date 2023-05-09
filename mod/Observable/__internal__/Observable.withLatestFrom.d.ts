import { Container, ObservableContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";
type ObservableWithLastestFrom = <C extends ObservableContainer.Type, TA, TB, T>(other: Container.Of<C, TB>, selector: Function2<TA, TB, T>) => Container.Operator<C, TA, T>;
declare const Observable_withLatestFrom: ObservableWithLastestFrom;
export default Observable_withLatestFrom;
