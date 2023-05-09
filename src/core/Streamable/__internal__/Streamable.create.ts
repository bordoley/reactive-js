import {
  Containers,
  DeferredObservableContainer,
  StreamableLike,
  StreamableLike_stream,
} from "../../../core.js";
import Stream_create from "../../../core/Stream/__internal__/Stream.create.js";

const Streamable_create: <TReq, T>(
  op: Containers.Operator<DeferredObservableContainer, TReq, T>,
) => StreamableLike<TReq, T> = <TReq, T>(
  op: Containers.Operator<DeferredObservableContainer, TReq, T>,
): StreamableLike<TReq, T> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
