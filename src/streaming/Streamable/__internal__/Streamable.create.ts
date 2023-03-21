import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_createLifted from "./Streamable.createLifted.js";

const Streamable_create = <TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
): StreamableLike<TReq, T> =>
  Streamable_createLifted<TReq, T>(op, false, false, false);

export default Streamable_create;
