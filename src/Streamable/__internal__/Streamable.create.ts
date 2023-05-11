import type * as DeferredObservable from "../../DeferredObservable.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import {
  ContainerOperator,
  StreamableLike,
  StreamableLike_stream,
} from "../../types.js";

const Streamable_create: <TReq, T>(
  op: ContainerOperator<DeferredObservable.Type, TReq, T>,
) => StreamableLike<TReq, T> = <TReq, T>(
  op: ContainerOperator<DeferredObservable.Type, TReq, T>,
): StreamableLike<TReq, T> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
