import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Producer_genPure } from "./Producer.gen.js";

const Producer_takeLast: Producer.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredSource.takeLast<ConsumerLike<T>, T>(
    Producer_genPure,
    (_, n) => Consumer.takeLast(n),
    options,
  )) as Producer.Signature["takeLast"];

export default Producer_takeLast;
