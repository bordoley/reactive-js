/// <reference types="./Runnable.buffer.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_buffer = /*@__PURE__*/ (() => returns(pipe((BufferSink.create), Runnable_lift())))();
export default Runnable_buffer;
