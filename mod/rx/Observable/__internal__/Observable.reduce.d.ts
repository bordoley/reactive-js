import { ContainerOperator } from "../../../containers.js";
import { Factory, Reducer } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableReduce = <C extends ObservableLike, T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
declare const Observable_reduce: ObservableReduce;
export default Observable_reduce;
