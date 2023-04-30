import { ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
declare const Observable_flatMapAsync: <TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>) => ContainerOperator<ObservableContainer, TA, TB>;
export default Observable_flatMapAsync;
