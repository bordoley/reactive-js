/// <reference types="./Broadcaster.encodeUtf8.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as EncodeUtf8Sink from "../../__internal__/sinks/EncodeUtf8Sink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_encodeUtf8 = 
/*@__PURE__*/ (() => returns(pipe(EncodeUtf8Sink.create, (Broadcaster_lift))))();
export default Broadcaster_encodeUtf8;
