import { partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_skipFirst: Producer.Signature["skipFirst"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirstSink.create,
    partial(options?.count),
    Producer_lift<T, T>(),
  )) as Producer.Signature["skipFirst"];

export default Producer_skipFirst;
