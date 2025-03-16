import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationOf,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { bindMethod, invoke, newInstance, pipe } from "../../../functions.js";
import { SinkLike, SinkLike_complete } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_map from "./Runnable.map.js";

class EncodeUtf8Runnable implements RunnableLike<Uint8Array<ArrayBufferLike>> {
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(private readonly s: ComputationOf<Runnable.Computation, string>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<Uint8Array<ArrayBufferLike>>): void {
    const textEncoder = newInstance(TextEncoder);

    pipe(
      this.s,
      Runnable_map<string, Uint8Array<ArrayBufferLike>>(
        bindMethod(textEncoder, "encode"),
      ),
      invoke(RunnableLike_eval, sink),
    );

    sink[SinkLike_complete]();
  }
}

const Runnable_encodeUtf8: Runnable.Signature["encodeUtf8"] = (() =>
  (s: ComputationOf<Runnable.Computation, string>) =>
    newInstance(EncodeUtf8Runnable, s)) as Runnable.Signature["encodeUtf8"];

export default Runnable_encodeUtf8;
