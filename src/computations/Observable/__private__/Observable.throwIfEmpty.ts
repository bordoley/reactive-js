import { Factory, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as ThrowIfEmptySink from "../../__internal__/sinks/ThrowIfEmptySink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (<T>(
  factory: Factory<unknown>,
) =>
  pipe(
    ThrowIfEmptySink.create,
    partial(factory),
    Observable_lift<T, T>(),
  )) as Observable.Signature["throwIfEmpty"];
export default Observable_throwIfEmpty;
