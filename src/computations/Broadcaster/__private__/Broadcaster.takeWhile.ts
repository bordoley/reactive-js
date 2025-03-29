import { Predicate, partial, pipe } from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_takeWhile: Broadcaster.Signature["takeWhile"] = (<T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileSink.create<EventListenerLike, T>,
    partial(predicate, options),
    Broadcaster_lift,
  )) as Broadcaster.Signature["takeWhile"];

export default Broadcaster_takeWhile;
