import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as ScanOperator from "../../__internal__/operators/ScanOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_scan: Broadcaster.Signature["scan"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    ScanOperator.create<T, TAcc>,
    partial(reducer, initialValue),
    Broadcaster_lift<T, TAcc>,
  )) as Broadcaster.Signature["scan"];

export default Broadcaster_scan;
