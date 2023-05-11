import type * as DeferredObservable from "../../DeferredObservable.js";
import { ContainerOperator, StreamableLike } from "../../types.js";
declare const Streamable_create: <TReq, T>(op: ContainerOperator<DeferredObservable.Type, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
