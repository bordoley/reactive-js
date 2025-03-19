import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Scan from "../../__internal__/operators/Scan.js";
import Observable_lift from "./Observable.lift.js";

const Observable_scan: Observable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    Scan.createObserver<T, TAcc>,
    partial(reducer, initialValue),
    Observable_lift<T, TAcc>(),
  );

export default Observable_scan;
