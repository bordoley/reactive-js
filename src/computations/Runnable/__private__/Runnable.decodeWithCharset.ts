import { partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as DecodeWithCharsetSink from "../../__internal__/sinks/DecodeWithCharsetSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_decodeWithCharset: Runnable.Signature["decodeWithCharset"] =
  options =>
    pipe(
      DecodeWithCharsetSink.create<SinkLike>,
      partial(options),
      Runnable_lift(),
    );

export default Runnable_decodeWithCharset;
