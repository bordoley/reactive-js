import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as ScanOperator from "../../__internal__/operators/ScanOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_scan: Producer.Signature["scan"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    ScanOperator.create<ConsumerLike, T, TAcc>,
    partial(reducer, initialValue),
    Producer_lift<T, TAcc>(),
  )) as Producer.Signature["scan"];

export default Producer_scan;
