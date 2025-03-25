/// <reference types="./Observable.encodeUtf8.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as EncodeUtf8Operator from "../../__internal__/operators/EncodeUtf8Operator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_encodeUtf8 = 
/*@__PURE__*/ (() => returns(pipe(EncodeUtf8Operator.create, Observable_lift())))();
export default Observable_encodeUtf8;
