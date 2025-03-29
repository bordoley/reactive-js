import { Predicate, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeWhile: Runnable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileSink.create<SinkLike, T>,
    partial(predicate, options),
    Runnable_lift<T, T>(),
  );

export default Runnable_takeWhile;
