import { partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as DecodeWithCharset from "../../__internal__/operators/DecodeWithCharset.js";
import Producer_lift from "./Producer.lift.js";

const Producer_decodeWithCharset: Producer.Signature["decodeWithCharset"] =
  options =>
    pipe(DecodeWithCharset.createConsumer, partial(options), Producer_lift());

export default Producer_decodeWithCharset;
