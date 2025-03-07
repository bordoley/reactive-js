import { ObservableLike } from "../../../computations.js";
import type * as Observable from "../../Observable.js";
import Observable_latest from "./Observable.latest.js";

const Observable_combineLatest: Observable.Signature["combineLatest"] = ((
  ...observables: readonly ObservableLike<any>[]
) =>
  Observable_latest(observables, 1)) as Observable.Signature["combineLatest"];

export default Observable_combineLatest;
