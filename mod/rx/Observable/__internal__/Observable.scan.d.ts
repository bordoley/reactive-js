import { ContainerOperator } from "../../../containers.js";
import { Factory, Reducer } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableScan = <C extends ObservableLike, T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
declare const Observable_scan: ObservableScan;
export default Observable_scan;
