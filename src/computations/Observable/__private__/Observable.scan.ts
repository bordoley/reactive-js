import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_scan: Observable.Signature["scan"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    ScanSink.create<ObserverLike, T, TAcc>,
    partial(reducer, initialValue),
    Observable_lift<T, TAcc>(),
  )) as Observable.Signature["scan"];

export default Observable_scan;
