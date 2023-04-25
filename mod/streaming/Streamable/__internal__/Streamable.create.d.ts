import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_create: <TReq, T>(op: ContainerOperator<ObservableLike, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
