/// <reference types="./Producer.encodeUtf8.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as EncodeUtf8Sink from "../../__internal__/sinks/EncodeUtf8Sink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_encodeUtf8 = 
/*@__PURE__*/ (() => returns(pipe(EncodeUtf8Sink.create, Producer_lift())))();
export default Producer_encodeUtf8;
