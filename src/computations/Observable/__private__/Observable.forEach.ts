import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { SideEffect1, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as ForEach from "../../__internal__/operators/ForEach.js";
import Observable_lift from "./Observable.lift.js";

const Observable_forEach: Observable.Signature["forEach"] = <T>(
  predicate: SideEffect1<T>,
) =>
  pipe(
    ForEach.createObserver,
    partial(predicate),
    Observable_lift<T, T>({
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: true,
    }),
  );

export default Observable_forEach;
