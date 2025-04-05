import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import { Function2, partial, pipe, tuple } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import type * as Observable from "../../Observable.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
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
    WithLatestFromSink.create<ObserverLike, ObservableLike<TB>, TA, TB, T>,
    partial(other, selector, EventSource.subscribe),
    Observable_lift<TA, T>({
      [ComputationLike_isPure]: Computation.isPure(other),
      [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
    }),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
