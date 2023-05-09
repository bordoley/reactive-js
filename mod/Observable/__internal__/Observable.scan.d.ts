import { Factory, Reducer } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableScan = <C extends ObservableContainer, T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Containers.Operator<C, T, TAcc>;
declare const Observable_scan: ObservableScan;
export default Observable_scan;
