import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer, StreamableLike } from "../../../rx.js";
declare const Streamable_create: <TReq, T>(op: ContainerOperator<ObservableContainer, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
