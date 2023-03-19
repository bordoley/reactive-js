import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike, FlowableState } from "../../../streaming.js";
import Flowable_createLifted from "./Flowable.createLifted.js";

const Flowable_create: <T>(
  op: ContainerOperator<ObservableLike, FlowableState, T>,
) => FlowableLike<T> = op => Flowable_createLifted(op, false);

export default Flowable_create;
