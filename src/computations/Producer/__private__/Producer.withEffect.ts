import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Producer_withEffect: Producer.Signature["withEffect"] =
  DeferredSource.withEffect<
    unknown,
    ConsumerLike
  > as Producer.Signature["withEffect"];

export default Producer_withEffect;
