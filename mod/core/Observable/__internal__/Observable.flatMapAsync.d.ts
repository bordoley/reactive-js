import { Container, ObservableContainer } from "../../../core.js";
import { Function2 } from "../../../functions.js";
declare const Observable_flatMapAsync: <TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>) => Container.Operator<ObservableContainer, TA, TB>;
export default Observable_flatMapAsync;
