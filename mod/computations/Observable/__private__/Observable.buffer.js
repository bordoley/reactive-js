/// <reference types="./Observable.buffer.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as BufferSink from "../../__internal__/sinks/BufferSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_buffer = ((options) => pipe(BufferSink.create, partial(options), Observable_lift()));
export default Observable_buffer;
