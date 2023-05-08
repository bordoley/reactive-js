import { Container, ObservableContainer } from "../../../core.js";
import { Factory } from "../../../functions.js";
type ObservableThrowIfEmpty = <C extends ObservableContainer, T>(factory: Factory<unknown>, options?: undefined) => Container.Operator<C, T, T>;
declare const Observable_throwIfEmpty: ObservableThrowIfEmpty;
export default Observable_throwIfEmpty;
