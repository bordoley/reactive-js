import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_create: <TReq, T>(op: ContainerOperator<ObservableContainerLike, TReq, T>) => StreamableLike<TReq, T>;
export default Streamable_create;
