import { pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as BufferOperator from "../../__internal__/operators/BufferOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_buffer: Observable.Signature["buffer"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    pipe(BufferOperator.create, Observable_lift<T, T[]>()),
  ))() as Observable.Signature["buffer"];

export default Observable_buffer;
