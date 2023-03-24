import { ContainerOperator } from "../../../containers.js";
import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableThrowIfEmpty = <C extends ObservableLike, T>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<C, T, T>;
declare const Observable_throwIfEmpty: ObservableThrowIfEmpty;
export default Observable_throwIfEmpty;
