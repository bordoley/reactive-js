import { pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as EncodeUtf8 from "../../__internal__/operators/EncodeUtf8.js";
import Observable_lift from "./Observable.lift.js";

const Observable_encodeUtf8: Observable.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8.createObserver, Observable_lift<string, Uint8Array>()),
    ))();

export default Observable_encodeUtf8;
