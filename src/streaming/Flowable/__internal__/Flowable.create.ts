import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike } from "../../../streaming.js";
import Flowable_createLifted from "./Flowable.createLifted.js";

const Flowable_create: <T>(
  op: ContainerOperator<ObservableLike, boolean, T>,
) => FlowableLike<T> = op => Flowable_createLifted(op, false);

export default Flowable_create;
