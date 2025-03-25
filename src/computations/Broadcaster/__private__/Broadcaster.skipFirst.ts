import { partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as SkipFirstOperator from "../../__internal__/operators/SkipFirstOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_skipFirst: Broadcaster.Signature["skipFirst"] = (<
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirstOperator.create,
    partial(options?.count),
    Broadcaster_lift<T, T>,
  )) as Broadcaster.Signature["skipFirst"];

export default Broadcaster_skipFirst;
