import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Stream_create from "../../../rx/Stream/__internal__/Stream.create.js";
import { StreamableLike, StreamableLike_stream } from "../../../streaming.js";

const Streamable_create: <TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
) => StreamableLike<TReq, T> = <TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
): StreamableLike<TReq, T> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
