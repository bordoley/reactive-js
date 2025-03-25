/// <reference types="./Observable.buffer.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as BufferOperator from "../../__internal__/operators/BufferOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_buffer = /*@__PURE__*/ (() => returns(pipe(BufferOperator.create, Observable_lift())))();
export default Observable_buffer;
