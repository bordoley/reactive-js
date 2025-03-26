import { partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DecodeWithCharsetOperator from "../../__internal__/operators/DecodeWithCharsetOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_decodeWithCharset: Producer.Signature["decodeWithCharset"] =
  (options =>
    pipe(
      DecodeWithCharsetOperator.create<ConsumerLike>,
      partial(options),
      Producer_lift(),
    )) as Producer.Signature["decodeWithCharset"];

export default Producer_decodeWithCharset;
