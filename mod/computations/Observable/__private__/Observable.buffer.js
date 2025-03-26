/// <reference types="./Observable.buffer.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_buffer = /*@__PURE__*/ (() => returns(pipe(BufferSink.create, Observable_lift())))();
export default Observable_buffer;
