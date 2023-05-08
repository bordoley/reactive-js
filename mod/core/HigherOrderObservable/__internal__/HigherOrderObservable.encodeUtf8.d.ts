import { Container, ObservableContainer, ReactiveContainer } from "../../../core.js";
declare const HigherOrderObservable_encodeUtf8: <C extends ObservableContainer>(defer: <T>(factory: import("../../../functions.js").Factory<Container.Of<C, T>>) => Container.Of<C, T>, map: <TA, TB>(selector: import("../../../functions.js").Function1<TA, TB>) => Container.Operator<C, TA, TB>) => () => Container.Operator<C, string, Uint8Array>;
export default HigherOrderObservable_encodeUtf8;
