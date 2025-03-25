import { pipe, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as EncodeUtf8Operator from "../../__internal__/operators/EncodeUtf8Operator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_encodeUtf8: Broadcaster.Signature["encodeUtf8"] =
  /*@__PURE__*/ (() =>
    returns(
      pipe(EncodeUtf8Operator.create, Broadcaster_lift<string, ArrayBuffer>),
    ))() as Broadcaster.Signature["encodeUtf8"];

export default Broadcaster_encodeUtf8;
