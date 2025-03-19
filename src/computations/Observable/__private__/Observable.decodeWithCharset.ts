import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as DecodeWithCharset from "../../__internal__/operators/DecodeWithCharset.js";
import Observable_lift from "./Observable.lift.js";

const Observable_decodeWithCharset: Observable.Signature["decodeWithCharset"] =
  options =>
    pipe(DecodeWithCharset.createObserver, partial(options), Observable_lift());

export default Observable_decodeWithCharset;
