import { pipe, returns } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_buffer: Runnable.Signature["buffer"] = /*@__PURE__*/ (<T>() =>
  returns(pipe(BufferSink.create<SinkLike, T>, Runnable_lift<T, T[]>())))();

export default Runnable_buffer;
