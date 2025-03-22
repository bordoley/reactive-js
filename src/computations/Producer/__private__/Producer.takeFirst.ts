import { partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as TakeFirstMixin from "../../__internal__/operators/TakeFirst.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeFirst: Producer.Signature["takeFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstMixin.createConsumer,
    partial(options?.count),
    Producer_lift<T, T>(),
  );

export default Producer_takeFirst;
