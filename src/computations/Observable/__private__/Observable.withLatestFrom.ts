import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import {
  Function2,
  SideEffect1,
  compose,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as ReactiveSource from "../../ReactiveSource.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";

const addEventListener = <T>(scheduler: ObserverLike, effect: SideEffect1<T>) =>
  compose(Observable_forEach(effect), ReactiveSource.subscribe({ scheduler }));

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
    partial(other, selector, addEventListener),
    Observable_lift<TA, T>({
      [ComputationLike_isPure]: Computation.isPure(other),
      [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
    }),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
