import { Containers, DeferredObservableContainer, StreamableLike } from "../../../core.js";
declare const Streamable_create: <TReq, T>(op: Containers.Operator<DeferredObservableContainer, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
