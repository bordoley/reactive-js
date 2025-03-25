import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as KeepOperator from "../../__internal__/operators/KeepOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_keep: Broadcaster.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    KeepOperator.create<T>,
    partial(predicate),
    Broadcaster_lift<T, T>,
  )) as Broadcaster.Signature["keep"];

export default Broadcaster_keep;
