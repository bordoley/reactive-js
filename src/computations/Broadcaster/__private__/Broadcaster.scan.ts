import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Scan from "../../__internal__/operators/Scan.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_scan: Broadcaster.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    Scan.createListener<T, TAcc>,
    partial(reducer, initialValue),
    Broadcaster_lift,
  );

export default Broadcaster_scan;
