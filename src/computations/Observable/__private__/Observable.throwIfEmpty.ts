import { Factory, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as ThrowIfEmpty from "../../__internal__/operators/ThrowIfEmpty.js";
import Observable_lift from "./Observable.lift.js";

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) =>
  pipe(
    ThrowIfEmpty.createObserver<T>,
    partial(factory),
    Observable_lift<T, T>(),
  );
export default Observable_throwIfEmpty;
