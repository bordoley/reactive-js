import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
import { StreamableLike, StreamableLike_stream } from "../../../streaming.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";

const Streamable_create: <TReq, T>(
  op: ContainerOperator<ObservableContainer, TReq, T>,
) => StreamableLike<TReq, T> = <TReq, T>(
  op: ContainerOperator<ObservableContainer, TReq, T>,
): StreamableLike<TReq, T> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
