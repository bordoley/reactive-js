import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { Producer_genPure } from "./Producer.gen.js";

const Producer_takeLast: Producer.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredReactiveSource.takeLast<ConsumerLike<T>, T>(
    Producer_genPure,
    Consumer.takeLast,
    options,
  )) as Producer.Signature["takeLast"];

export default Producer_takeLast;
