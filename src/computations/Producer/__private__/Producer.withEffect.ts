import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_withEffect: Producer.Signature["withEffect"] =
  DeferredEventSource.withEffect<
    unknown,
    ConsumerLike
  > as Producer.Signature["withEffect"];

export default Producer_withEffect;
