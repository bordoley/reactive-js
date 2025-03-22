import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as TakeWhile from "../../__internal__/operators/TakeWhile.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeWhile: Runnable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhile.createSink<T>,
    partial(predicate, options),
    Runnable_lift<T, T>(),
  );

export default Runnable_takeWhile;
