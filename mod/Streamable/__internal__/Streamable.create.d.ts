import { Containers, DeferredObservableContainer } from "../../containers.js";
import { StreamableLike } from "../../types.js";
declare const Streamable_create: <TReq, T>(op: Containers.Operator<DeferredObservableContainer, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
