import { Containers, ObservableContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";
declare const Observable_flatMapAsync: <TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>) => Containers.Operator<ObservableContainer.Type, TA, TB>;
export default Observable_flatMapAsync;
