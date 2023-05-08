import { Containers, ObservableContainer, ReactiveContainers } from "../../../core.js";
declare const HigherOrderObservable_encodeUtf8: <C extends ObservableContainer>(defer: <T>(factory: import("../../../functions.js").Factory<Containers.Of<C, T>>) => Containers.Of<C, T>, map: <TA, TB>(selector: import("../../../functions.js").Function1<TA, TB>) => Containers.Operator<C, TA, TB>) => () => Containers.Operator<C, string, Uint8Array>;
export default HigherOrderObservable_encodeUtf8;
