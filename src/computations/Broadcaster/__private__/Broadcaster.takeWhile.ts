import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeWhile from "../../__internal__/operators/TakeWhile.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_takeWhile: Broadcaster.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhile.createListener<T>,
    partial(predicate, options),
    Broadcaster_lift,
  );

export default Broadcaster_takeWhile;
