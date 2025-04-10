import { pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as EncodeUtf8Sink from "../../__internal__/sinks/EncodeUtf8Sink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_encodeUtf8: Observable.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8Sink.create, Observable_lift<string, Uint8Array>()),
    ))() as Observable.Signature["encodeUtf8"];

export default Observable_encodeUtf8;
