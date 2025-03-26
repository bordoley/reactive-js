import { pipe, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as EncodeUtf8Sink from "../../__internal__/sinks/EncodeUtf8Sink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_encodeUtf8: Broadcaster.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8Sink.create, Broadcaster_lift<string, ArrayBuffer>),
    ))() as Broadcaster.Signature["encodeUtf8"];

export default Broadcaster_encodeUtf8;
