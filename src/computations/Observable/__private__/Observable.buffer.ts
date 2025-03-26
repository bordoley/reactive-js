import { pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_buffer: Observable.Signature["buffer"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    pipe(BufferSink.create, Observable_lift<T, T[]>()),
  ))() as Observable.Signature["buffer"];

export default Observable_buffer;
