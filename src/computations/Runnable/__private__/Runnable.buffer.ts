import { partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_buffer: Runnable.Signature["buffer"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    BufferSink.create,
    partial(options),
    Runnable_lift<T, T[]>(),
  )) as Runnable.Signature["buffer"];

export default Runnable_buffer;
