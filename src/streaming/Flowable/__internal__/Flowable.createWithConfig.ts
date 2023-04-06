import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import {
  FlowableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import FlowableStream_create from "./FlowableStream.create.js";

const Flowable_createWithConfig = <T>(
  op: ContainerOperator<ObservableLike, boolean, T>,
  config: {
    [StreamableLike_isRunnable]: boolean;
  },
): FlowableLike<T> => ({
  ...config,
  [StreamableLike_isEnumerable]: false,
  [StreamableLike_isInteractive]: false,
  [StreamableLike_stream]: (scheduler, options) =>
    FlowableStream_create(op, scheduler, options),
});

export default Flowable_createWithConfig;
