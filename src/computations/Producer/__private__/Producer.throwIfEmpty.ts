import { Factory, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as ThrowIfEmptySink from "../../__internal__/sinks/ThrowIfEmptySink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_throwIfEmpty: Producer.Signature["throwIfEmpty"] = (<T>(
  factory: Factory<unknown>,
) =>
  pipe(
    ThrowIfEmptySink.create,
    partial(factory),
    Producer_lift<T, T>(),
  )) as Producer.Signature["throwIfEmpty"];
export default Producer_throwIfEmpty;
