import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_buffer: Observable.Signature["buffer"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    BufferSink.create,
    partial(options),
    Observable_lift<T, T[]>(),
  )) as Observable.Signature["buffer"];

export default Observable_buffer;
