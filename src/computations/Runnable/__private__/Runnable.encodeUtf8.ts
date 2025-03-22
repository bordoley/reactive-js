import { pipe, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as EncodeUtf8 from "../../__internal__/operators/EncodeUtf8.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_encodeUtf8: Runnable.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8.createSink, Runnable_lift<string, Uint8Array>()),
    ))();

export default Runnable_encodeUtf8;
