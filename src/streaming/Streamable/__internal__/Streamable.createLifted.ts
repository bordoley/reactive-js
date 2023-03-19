import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import {
  AsyncEnumerableLike,
  FlowableLike,
  FlowableState,
  StreamLike,
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";

interface StreamableCreateLifted {
  <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    isInteractive: true,
    isEnumerable: boolean,
    isRunnable: boolean,
  ): AsyncEnumerableLike<T>;
  <T>(
    op: ContainerOperator<ObservableLike, FlowableState, T>,
    isInteractive: false,
    isEnumerable: boolean,
    isRunnable: boolean,
  ): FlowableLike<T>;
  <TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    isInteractive: boolean,
    isEnumerable: boolean,
    isRunnable: boolean,
  ): StreamableLike<TReq, T, TStream>;
}

const Streamable_createLifted: StreamableCreateLifted = (<TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
  isInteractive: boolean,
  isEnumerable: boolean,
  isRunnable: boolean,
): StreamableLike<TReq, T> => ({
  [StreamableLike_isEnumerable]: isEnumerable,
  [StreamableLike_isInteractive]: isInteractive,
  [StreamableLike_isRunnable]: isRunnable,
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create(op, scheduler, options),
})) as StreamableCreateLifted;

export default Streamable_createLifted;
