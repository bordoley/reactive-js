import { partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as DecodeWithCharset from "../../__internal__/operators/DecodeWithCharset.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_decodeWithCharset: Runnable.Signature["decodeWithCharset"] =
  options =>
    pipe(DecodeWithCharset.createSink, partial(options), Runnable_lift());

export default Runnable_decodeWithCharset;
