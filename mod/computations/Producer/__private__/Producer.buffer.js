/// <reference types="./Producer.buffer.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_buffer = /*@__PURE__*/ (() => returns(pipe(BufferSink.create, Producer_lift())))();
export default Producer_buffer;
