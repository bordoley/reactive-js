import { partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as SkipFirst from "../../__internal__/operators/SkipFirst.js";
import Producer_lift from "./Producer.lift.js";

const Producer_skipFirst: Producer.Signature["skipFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirst.createConsumer,
    partial(options?.count),
    Producer_lift<T, T>(),
  );

export default Producer_skipFirst;
