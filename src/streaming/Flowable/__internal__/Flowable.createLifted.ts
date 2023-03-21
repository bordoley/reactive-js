import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import {
  FlowableLike,
  FlowableState,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import FlowableStream_create from "./FlowableStream.create.js";

const Flowable_createLifted = <T>(
  op: ContainerOperator<ObservableLike, FlowableState, T>,
  isRunnable: boolean,
): FlowableLike<T> => ({
  [StreamableLike_isEnumerable]: false,
  [StreamableLike_isInteractive]: false,
  [StreamableLike_isRunnable]: isRunnable,
  [StreamableLike_stream]: (scheduler, options) =>
    FlowableStream_create(op, scheduler, options),
});

export default Flowable_createLifted;
