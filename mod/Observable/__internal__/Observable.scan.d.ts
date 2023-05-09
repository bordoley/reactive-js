import { Container, ObservableContainer } from "../../containers.js";
import { Factory, Reducer } from "../../functions.js";
type ObservableScan = <C extends ObservableContainer.Type, T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Container.Operator<C, T, TAcc>;
declare const Observable_scan: ObservableScan;
export default Observable_scan;
