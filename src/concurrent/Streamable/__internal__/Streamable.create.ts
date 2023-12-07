import {
  DeferredSideEffectsObservableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import type * as Streamable from "../../Streamable.js";

const Streamable_create: Streamable.Signature["create"] = <TReq, T>(
  op: Function1<
    DeferredSideEffectsObservableLike<TReq>,
    DeferredSideEffectsObservableLike<T>
  >,
) => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
