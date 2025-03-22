import { Factory, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as ThrowIfEmpty from "../../__internal__/operators/ThrowIfEmpty.js";
import Producer_lift from "./Producer.lift.js";

const Producer_throwIfEmpty: Producer.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) =>
  pipe(ThrowIfEmpty.createConsumer<T>, partial(factory), Producer_lift<T, T>());
export default Producer_throwIfEmpty;
