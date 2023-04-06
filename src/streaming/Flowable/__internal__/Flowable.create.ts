import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike, StreamableLike_isRunnable } from "../../../streaming.js";
import Flowable_createWithConfig from "./Flowable.createWithConfig.js";

const Flowable_create: <T>(
  op: ContainerOperator<ObservableLike, boolean, T>,
) => FlowableLike<T> = op =>
  Flowable_createWithConfig(op, {
    [StreamableLike_isRunnable]: false,
  });

export default Flowable_create;
