/// <reference types="./Producer.encodeUtf8.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as EncodeUtf8Operator from "../../__internal__/operators/EncodeUtf8Operator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_encodeUtf8 = 
/*@__PURE__*/ (() => returns(pipe(EncodeUtf8Operator.create, Producer_lift())))();
export default Producer_encodeUtf8;
