import { Container, ObservableContainer, StreamableLike } from "../../../core.js";
declare const Streamable_create: <TReq, T>(op: Container.Operator<ObservableContainer, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
