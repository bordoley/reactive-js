import { pipe, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as EncodeUtf8Sink from "../../__internal__/sinks/EncodeUtf8Sink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_encodeUtf8: Producer.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8Sink.create, Producer_lift<string, Uint8Array>()),
    ))() as Producer.Signature["encodeUtf8"];

export default Producer_encodeUtf8;
