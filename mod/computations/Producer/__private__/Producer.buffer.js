/// <reference types="./Producer.buffer.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as BufferOperator from "../../__internal__/operators/BufferOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_buffer = /*@__PURE__*/ (() => returns(pipe(BufferOperator.create, Producer_lift())))();
export default Producer_buffer;
