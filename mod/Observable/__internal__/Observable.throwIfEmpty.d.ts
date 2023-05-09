import { Container, ObservableContainer } from "../../containers.js";
import { Factory } from "../../functions.js";
type ObservableThrowIfEmpty = <C extends ObservableContainer.Type, T>(factory: Factory<unknown>, options?: undefined) => Container.Operator<C, T, T>;
declare const Observable_throwIfEmpty: ObservableThrowIfEmpty;
export default Observable_throwIfEmpty;
