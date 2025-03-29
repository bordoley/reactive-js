/// <reference types="./Producer.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DecodeWithCharsetSink from "../../__internal__/sinks/DecodeWithCharsetSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_decodeWithCharset = (options => pipe((DecodeWithCharsetSink.create), partial(options), Producer_lift()));
export default Producer_decodeWithCharset;
