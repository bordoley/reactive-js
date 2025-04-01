import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Producer_withEffect: Producer.Signature["withEffect"] =
  DeferredReactiveSource.withEffect<
    unknown,
    ConsumerLike
  > as Producer.Signature["withEffect"];

export default Producer_withEffect;
