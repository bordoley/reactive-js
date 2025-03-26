/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DecodeWithCharsetSink from "../../__internal__/sinks/DecodeWithCharsetSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_decodeWithCharset = (options => pipe((DecodeWithCharsetSink.create), partial(options), Observable_lift()));
export default Observable_decodeWithCharset;
