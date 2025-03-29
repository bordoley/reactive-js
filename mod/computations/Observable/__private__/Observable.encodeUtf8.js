/// <reference types="./Observable.encodeUtf8.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as EncodeUtf8Sink from "../../__internal__/sinks/EncodeUtf8Sink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_encodeUtf8 = 
/*@__PURE__*/ (() => returns(pipe(EncodeUtf8Sink.create, Observable_lift())))();
export default Observable_encodeUtf8;
