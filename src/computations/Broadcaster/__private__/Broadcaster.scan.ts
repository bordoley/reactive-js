import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_scan: Broadcaster.Signature["scan"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    ScanSink.create<SinkLike, T, TAcc>,
    partial(reducer, initialValue),
    Broadcaster_lift<T, TAcc>,
  )) as Broadcaster.Signature["scan"];

export default Broadcaster_scan;
