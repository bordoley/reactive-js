import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  HigherOrderInnerComputationLike,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as SwitchAll from "../../__internal__/operators/SwitchAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_switchAll: Observable.Signature["switchAll"] = ((options?: {
  readonly innerType?: HigherOrderInnerComputationLike;
}) =>
  pipe(
    SwitchAll.createObserver,
    Observable_lift({
      [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
      [ComputationLike_isSynchronous]: Computation.isSynchronous(
        options?.innerType ?? {},
      ),
    }),
  )) as Observable.Signature["switchAll"];

export default Observable_switchAll;
