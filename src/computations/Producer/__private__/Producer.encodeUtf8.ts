import { pipe, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as EncodeUtf8 from "../../__internal__/operators/EncodeUtf8.js";
import Producer_lift from "./Producer.lift.js";

const Producer_encodeUtf8: Producer.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8.createConsumer, Producer_lift<string, Uint8Array>()),
    ))();

export default Producer_encodeUtf8;
