import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { PauseableState } from "../../../scheduling.js";
import {
  AsyncEnumerableLike,
  FlowableLike,
  StreamLike,
  StreamableLike,
} from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "./Streamable.create.js";

interface StreamableCreateLifted {
  <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    isInteractive: true,
    isEnumerable: boolean,
    isRunnable: boolean,
  ): AsyncEnumerableLike<T>;
  <T>(
    op: ContainerOperator<ObservableLike, Updater<PauseableState>, T>,
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
): StreamableLike<TReq, T> =>
  Streamable_create(
    (scheduler, options) => Stream_create(op, scheduler, options),
    isInteractive,
    isEnumerable,
    isRunnable,
  )) as StreamableCreateLifted;

export default Streamable_createLifted;
