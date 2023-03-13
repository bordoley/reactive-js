import { ContainerOperator } from "../../../containers.js";
import { Updater, compose, isFunction, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import {
  FlowableLike,
  FlowableState,
  FlowableState_paused,
} from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const Flowable_createLifted = <T>(
  op: ContainerOperator<ObservableLike, FlowableState, T>,
  isRunnable: boolean,
): FlowableLike<T> =>
  Streamable_createLifted(
    compose(
      Observable_scan<
        ObservableLike,
        FlowableState | Updater<FlowableState>,
        FlowableState
      >(
        (acc, next) => (isFunction(next) ? next(acc) : next),
        returns(FlowableState_paused),
      ),
      Observable_distinctUntilChanged<FlowableState>(),
      op,
    ),
    false,
    false,
    isRunnable,
  );

export default Flowable_createLifted;
