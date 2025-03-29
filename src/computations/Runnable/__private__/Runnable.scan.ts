import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_scan: Runnable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    ScanSink.create<SinkLike, T, TAcc>,
    partial(reducer, initialValue),
    Runnable_lift<T, TAcc>(),
  );

export default Runnable_scan;
