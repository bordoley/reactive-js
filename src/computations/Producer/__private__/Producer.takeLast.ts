import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Producer_genPure } from "./Producer.gen.js";

const Producer_takeLast: Producer.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredEventSource.takeLast<ConsumerLike<T>, T>(
    Producer_genPure,
    Consumer.takeLast,
    options,
  )) as Producer.Signature["takeLast"];

export default Producer_takeLast;
