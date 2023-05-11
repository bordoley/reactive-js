import type * as DeferredObservable from "../../DeferredObservable.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import type * as Streamable from "../../Streamable.js";
import { ContainerOperator, StreamableLike_stream } from "../../types.js";

const Streamable_create: Streamable.Signature["create"] = <TReq, T>(
  op: ContainerOperator<DeferredObservable.Type, TReq, T>,
) => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
