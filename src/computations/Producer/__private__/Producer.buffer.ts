import { pipe, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Buffer from "../../__internal__/operators/Buffer.js";
import Producer_lift from "./Producer.lift.js";

const Producer_buffer: Producer.Signature["buffer"] = /*@__PURE__*/ (<T>() =>
  returns(pipe(Buffer.createConsumer, Producer_lift<T, T[]>())))();

export default Producer_buffer;
