import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Keep from "../../__internal__/operators/Keep.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_keep: Broadcaster.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(Keep.createListener<T>, partial(predicate), Broadcaster_lift);

export default Broadcaster_keep;
