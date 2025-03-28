/// <reference types="./Runnable.buffer.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_buffer = ((options) => pipe(BufferSink.create, partial(options), Runnable_lift()));
export default Runnable_buffer;
