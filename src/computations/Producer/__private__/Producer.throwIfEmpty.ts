import { Factory, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as ThrowIfEmptyOperator from "../../__internal__/operators/ThrowIfEmptyOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_throwIfEmpty: Producer.Signature["throwIfEmpty"] = (<T>(
  factory: Factory<unknown>,
) =>
  pipe(
    ThrowIfEmptyOperator.create,
    partial(factory),
    Producer_lift<T, T>(),
  )) as Producer.Signature["throwIfEmpty"];
export default Producer_throwIfEmpty;
