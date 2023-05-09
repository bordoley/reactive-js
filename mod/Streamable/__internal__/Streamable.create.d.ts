import { Container, DeferredObservableContainer } from "../../containers.js";
import { StreamableLike } from "../../types.js";
declare const Streamable_create: <TReq, T>(op: Container.Operator<DeferredObservableContainer.Type, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
