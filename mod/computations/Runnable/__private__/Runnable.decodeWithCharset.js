/// <reference types="./Runnable.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DecodeWithCharsetSink from "../../__internal__/sinks/DecodeWithCharsetSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_decodeWithCharset = options => pipe((DecodeWithCharsetSink.create), partial(options), Runnable_lift());
export default Runnable_decodeWithCharset;
