import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import { Function2, partial, pipe, tuple } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as WithLatestFrom from "../../__internal__/operators/WithLatestFrom.js";
import Observable_lift from "./Observable.lift.js";

const Observable_withLatestFrom: Observable.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    WithLatestFrom.createObserver<TA, TB, T>,
    partial(other, selector),
    Observable_lift<TA, T>({
      [ComputationLike_isPure]: Computation.isPure(other),
      [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
    }),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
