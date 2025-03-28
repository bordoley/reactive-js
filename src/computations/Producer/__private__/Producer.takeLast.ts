import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Producer_genPure } from "./Producer.gen.js";

const m = {
  genPure: Producer_genPure,
};

const Producer_takeLast: Producer.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredSource.takeLast(m)<ObserverLike<T>, T>(
    Observer.takeLast,
    options,
  )) as Producer.Signature["takeLast"];

export default Producer_takeLast;
