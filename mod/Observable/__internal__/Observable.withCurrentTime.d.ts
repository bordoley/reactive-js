import { Container, ObservableContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";
type ObservableWithCurrentTime = <C extends ObservableContainer.Type, TA, TB>(selector: Function2<number, TA, TB>) => Container.Operator<C, TA, TB>;
declare const Observable_withCurrentTime: ObservableWithCurrentTime;
export default Observable_withCurrentTime;
