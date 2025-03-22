import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as ScanMixin from "../../__internal__/operators/Scan.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_scan: Runnable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    ScanMixin.createSink<T, TAcc>,
    partial(reducer, initialValue),
    Runnable_lift<T, TAcc>(),
  );

export default Runnable_scan;
