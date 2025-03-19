import { pipe, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as Buffer from "../../__internal__/operators/Buffer.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_buffer: Runnable.Signature["buffer"] = /*@__PURE__*/ (<T>() =>
  returns(pipe(Buffer.createSink, Runnable_lift<T, T[]>())))();

export default Runnable_buffer;
