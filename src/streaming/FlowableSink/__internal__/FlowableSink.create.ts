import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableSinkLike } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const FlowableSink_create = <T>(
  op: ContainerOperator<ObservableLike, T, boolean | Updater<boolean>>,
): FlowableSinkLike<T> => Streamable_createLifted(op, false, false, false);

export default FlowableSink_create;
