import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableSinkLike, FlowableState } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const FlowableSink_create = <T>(
  op: ContainerOperator<
    ObservableLike,
    T,
    FlowableState | Updater<FlowableState>
  >,
): FlowableSinkLike<T> => Streamable_createLifted(op, false, false, false);

export default FlowableSink_create;
