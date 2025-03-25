import { pipe, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as BufferOperator from "../../__internal__/operators/BufferOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_buffer: Producer.Signature["buffer"] = /*@__PURE__*/ (<T>() =>
  returns(
    pipe(BufferOperator.create, Producer_lift<T, T[]>()),
  ))() as Producer.Signature["buffer"];

export default Producer_buffer;
