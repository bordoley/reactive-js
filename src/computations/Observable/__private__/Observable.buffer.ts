import { pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Buffer from "../../__internal__/operators/Buffer.js";
import Observable_lift from "./Observable.lift.js";

const Observable_buffer: Observable.Signature["buffer"] = /*@__PURE__*/ (<
  T,
>() => returns(pipe(Buffer.createObserver, Observable_lift<T, T[]>())))();

export default Observable_buffer;
