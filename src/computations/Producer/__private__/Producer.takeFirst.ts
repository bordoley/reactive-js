import { partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as TakeFirstOperator from "../../__internal__/operators/TakeFirstOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeFirst: Producer.Signature["takeFirst"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstOperator.create<T>,
    partial(options?.count),
    Producer_lift(),
  )) as Producer.Signature["takeFirst"];

export default Producer_takeFirst;
