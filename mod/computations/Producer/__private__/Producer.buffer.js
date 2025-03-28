/// <reference types="./Producer.buffer.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_buffer = ((options) => pipe(BufferSink.create, partial(options), Producer_lift()));
export default Producer_buffer;
